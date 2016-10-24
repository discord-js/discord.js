const WebSocket = require('ws');
const Constants = require('../../util/Constants');
const SecretKey = require('./util/SecretKey');
const EventEmitter = require('events').EventEmitter;

/**
 * Represents a Voice Connection's WebSocket
 * @extends {EventEmitter}
 * @private
 */
class VoiceWebSocket extends EventEmitter {
  constructor(voiceConnection) {
    super();
    /**
     * The Voice Connection that this WebSocket serves
     * @type {VoiceConnection}
     */
    this.voiceConnection = voiceConnection;
    /**
     * How many connection attempts have been made
     * @type {number}
     */
    this.attempts = 0;
    this.connect();
  }

  /**
   * The client of this voice websocket
   * @type {Client}
   * @readonly
   */
  get client() {
    return this.voiceConnection.voiceManager.client;
  }

  /**
   * Resets the current WebSocket
   */
  reset() {
    if (this.ws) {
      if (this.ws.readyState !== WebSocket.CLOSED) {
        this.ws.close();
      }
      this.ws = null;
    }
    this.clearHeartbeat();
  }

  /**
   * Starts connecting to the Voice WebSocket Server.
   */
  connect() {
    if (this.ws) {
      this.reset();
    }
    if (this.attempts > 5) {
      this.emit('error', new Error(`too many connection attempts (${this.attempts})`));
      return;
    }
    this.attempts++;
    /**
     * The actual WebSocket used to connect to the Voice WebSocket Server.
     * @type {WebSocket}
     */
    this.ws = new WebSocket(`wss://${this.voiceConnection.authentication.endpoint}`);
    this.ws.onopen = this.onOpen.bind(this);
    this.ws.onmessage = this.onMessage.bind(this);
    this.ws.onclose = this.onClose.bind(this);
    this.ws.onerror = this.onError.bind(this);
  }

  /**
   * Sends data to the WebSocket if it is open.
   * @param {string} data the data to send to the WebSocket
   * @returns {Promise<string>}
   */
  send(data) {
    return new Promise((resolve, reject) => {
      if (this.ws.readyState === WebSocket.OPEN) {
        console.log('sending', data);
        this.ws.send(data, null, error => {
          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
        });
      } else {
        reject(new Error('websocket not open'));
      }
    });
  }

  /**
   * JSON.stringify's a packet and then sends it to the WebSocket Server.
   * @param {Object} packet the packet to send
   * @returns {Promise<string>}
   */
  sendPacket(packet) {
    try {
      packet = JSON.stringify(packet);
    } catch (error) {
      return Promise.reject(error);
    }
    return this.send(packet);
  }

  /**
   * Called whenever the WebSocket opens
   */
  onOpen() {
    this.sendPacket({
      op: Constants.OPCodes.DISPATCH,
      d: {
        server_id: this.voiceConnection.channel.guild.id,
        user_id: this.client.user.id,
        token: this.voiceConnection.authentication.token,
        session_id: this.voiceConnection.authentication.session_id,
      },
    }).catch(() => {
      this.emit('error', new Error('tried to send join packet but WebSocket not open'));
    });
  }

  /**
   * Called whenever a message is received from the WebSocket
   * @param {MessageEvent} event the message event that was received
   * @returns {void}
   */
  onMessage(event) {
    try {
      return this.onPacket(JSON.parse(event.data));
    } catch (error) {
      return this.onError(error);
    }
  }

  /**
   * Called whenever the connection to the WebSocket Server is lost
   * @param {CloseEvent} event the close event
   */
  onClose(event) {
    // #todo see if the connection is open before reconnecting
    this.client.setTimeout(this.connect.bind(this), this.attempts * 1000);
  }

  /**
   * Called whenever an error occurs with the WebSocket.
   * @param {Error} error the error that occurred
   */
  onError(error) {
    this.emit('error', error);
  }

  /**
   * Called whenever a valid packet is received from the WebSocket
   * @param {Object} packet the received packet
   */
  onPacket(packet) {
    switch (packet.op) {
      case Constants.VoiceOPCodes.READY:
        this.setHeartbeat(packet.d.heartbeat_interval);
        /**
         * Emitted once the voice websocket receives the ready packet
         * @param {Object} packet the received packet
         * @event VoiceWebSocket#ready
         */
        this.emit('ready', packet.d);
        break;
      case Constants.VoiceOPCodes.SESSION_DESCRIPTION:
        /**
         * Emitted once the Voice Websocket receives a description of this voice session
         * @param {string} encryptionMode the type of encryption being used
         * @param {SecretKey} secretKey the secret key used for encryption
         * @event VoiceWebSocket#sessionDescription
         */
        this.emit('sessionDescription', packet.d.mode, new SecretKey(packet.d.secret_key));
        break;
      case Constants.VoiceOPCodes.SPEAKING:
        /**
         * Emitted whenever a speaking packet is received
         * @param {Object} data
         * @event VoiceWebSocket#speaking
         */
        this.emit('speaking', packet.d);
        break;
      default:
        /**
         * Emitted when an unhandled packet is received
         * @param {Object} packet
         * @event VoiceWebSocket#unknownPacket
         */
        this.emit('unknownPacket', packet);
        break;
    }
  }

  /**
   * Sets an interval at which to send a heartbeat packet to the WebSocket
   * @param {number} interval the interval at which to send a heartbeat packet
   */
  setHeartbeat(interval) {
    if (!interval || isNaN(interval)) {
      this.onError(new Error('tried to set voice heartbeat but no valid interval was specified'));
      return;
    }
    if (this.heartbeatInterval) {
      /**
       * Emitted whenver the voice websocket encounters a non-fatal error
       * @param {string} warn the warning
       * @event VoiceWebSocket#warn
       */
      this.emit('warn', 'a voice heartbeat interval is being overwritten');
      clearInterval(this.heartbeatInterval);
    }
    this.heartbeatInterval = this.client.setInterval(this.sendHeartbeat.bind(this), interval);
  }

  /**
   * Clears a heartbeat interval, if one exists
   */
  clearHeartbeat() {
    if (!this.heartbeatInterval) {
      this.emit('warn', 'tried to clear a heartbeat interval that does not exist');
      return;
    }
    clearInterval(this.heartbeatInterval);
    this.heartbeatInterval = null;
  }

  /**
   * Sends a heartbeat packet
   */
  sendHeartbeat() {
    this.sendPacket({ op: Constants.VoiceOPCodes.HEARTBEAT, d: null })
      .catch(() => {
        this.emit('warn', 'tried to send heartbeat, but connection is not open');
        this.clearHeartbeat();
      });
  }
}

module.exports = VoiceWebSocket;

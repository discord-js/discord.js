const path = require('path');
const Message = require('../Message');
const MessageCollector = require('../MessageCollector');
const Collection = require('../../util/Collection');
const escapeMarkdown = require('../../util/EscapeMarkdown');

/**
 * Interface for classes that have text-channel-like features
 * @interface
 */
class TextBasedChannel {
  constructor() {
    /**
     * A collection containing the messages sent to this channel.
     * @type {Collection<string, Message>}
     */
    this.messages = new Collection();

    /**
     * The ID of the last message in the channel, if one was sent.
     * @type {?string}
     */
    this.lastMessageID = null;
  }

  /**
   * Options that can be passed into send
   * @typedef {Object} MessageOptions
   * @property {boolean} [tts=false] Whether or not the message should be spoken aloud
   * @property {string} [nonce=''] The nonce for the message
   * @property {Object} [embed] An embed for the message
   * (see [here](https://discordapp.com/developers/docs/resources/channel#embed-object) for more details)
   * @property {boolean} [disableEveryone=this.client.options.disableEveryone] Whether or not @everyone and @here
   * should be replaced with plain-text
   * @property {FileOptions} [file] A file to send with the message
   * @property {string} [code] Language for optional codeblock formatting to apply
   */

   /**
    * @typedef {Object} FileOptions
    * @property {BufferResolvable} attachment
    * @property {string} [name='file.jpg']
    */

    /**
     * Send a message to this channel
     * @param {StringResolvable} contentOrOptions The content to send, or MessageOptions
     * @param {MessageOptions} [options={}] The options to provide
     * @returns {Promise<Message|Message[]>}
     * @example
     * // send a message
     * channel.send('hello!')
     *  .then(message => console.log(`Sent message: ${message.content}`))
     *  .catch(console.error);
     */
  send(contentOrOptions, options) {
    let content;
    if (!options && typeof contentOrOptions === 'object') {
      content = '';
      options = contentOrOptions;
    } else {
      content = contentOrOptions;
      options = options || {};
    }
    if (options.code) {
      content = escapeMarkdown(this.client.resolver.resolveString(content), true);
      content = `\`\`\`${options.code || ''}\n${content}\n\`\`\``;
    }
    if (options.file) {
      if (!options.file.name) {
        if (typeof options.file.attachment === 'string') {
          options.file.name = path.basename(options.file.attachment);
        } else if (options.file.attachment && options.file.attachment.path) {
          options.file.name = path.basename(options.file.attachment.path);
        } else {
          options.file.name = 'file.jpg';
        }
      }
      return this.client.resolver.resolveBuffer(options.file.attachment).then(file =>
        this.client.rest.methods.sendMessage(this, content, options, {
          file,
          name: options.file.name,
        })
      );
    }
    return this.client.rest.methods.sendMessage(this, content, options);
  }

  /**
   * Gets a single message from this channel, regardless of it being cached or not.
   * <warn>This is only available when using a bot account.</warn>
   * @param {string} messageID The ID of the message to get
   * @returns {Promise<Message>}
   * @example
   * // get message
   * channel.fetchMessage('99539446449315840')
   *   .then(message => console.log(message.content))
   *   .catch(console.error);
   */
  fetchMessage(messageID) {
    return this.client.rest.methods.getChannelMessage(this, messageID).then(data => {
      const msg = data instanceof Message ? data : new Message(this, data, this.client);
      this._cacheMessage(msg);
      return msg;
    });
  }

  /**
   * The parameters to pass in when requesting previous messages from a channel. `around`, `before` and
   * `after` are mutually exclusive. All the parameters are optional.
   * @typedef {Object} ChannelLogsQueryOptions
   * @property {number} [limit=50] Number of messages to acquire
   * @property {string} [before] ID of a message to get the messages that were posted before it
   * @property {string} [after] ID of a message to get the messages that were posted after it
   * @property {string} [around] ID of a message to get the messages that were posted around it
   */

  /**
   * Gets the past messages sent in this channel. Resolves with a collection mapping message ID's to Message objects.
   * @param {ChannelLogsQueryOptions} [options={}] The query parameters to pass in
   * @returns {Promise<Collection<string, Message>>}
   * @example
   * // get messages
   * channel.fetchMessages({limit: 10})
   *  .then(messages => console.log(`Received ${messages.size} messages`))
   *  .catch(console.error);
   */
  fetchMessages(options = {}) {
    return this.client.rest.methods.getChannelMessages(this, options).then(data => {
      const messages = new Collection();
      for (const message of data) {
        const msg = new Message(this, message, this.client);
        messages.set(message.id, msg);
        this._cacheMessage(msg);
      }
      return messages;
    });
  }

  /**
   * Fetches the pinned messages of this channel and returns a collection of them.
   * @returns {Promise<Collection<string, Message>>}
   */
  fetchPinnedMessages() {
    return this.client.rest.methods.getChannelPinnedMessages(this).then(data => {
      const messages = new Collection();
      for (const message of data) {
        const msg = new Message(this, message, this.client);
        messages.set(message.id, msg);
        this._cacheMessage(msg);
      }
      return messages;
    });
  }

  /**
   * Starts a typing indicator in the channel.
   * @param {number} [count] The number of times startTyping should be considered to have been called
   * @example
   * // start typing in a channel
   * channel.startTyping();
   */
  startTyping(count) {
    if (typeof count !== 'undefined' && count < 1) throw new RangeError('Count must be at least 1.');
    if (!this.client.user._typing.has(this.id)) {
      this.client.user._typing.set(this.id, {
        count: count || 1,
        interval: this.client.setInterval(() => {
          this.client.rest.methods.sendTyping(this.id);
        }, 4000),
      });
      this.client.rest.methods.sendTyping(this.id);
    } else {
      const entry = this.client.user._typing.get(this.id);
      entry.count = count || entry.count + 1;
    }
  }

  /**
   * Stops the typing indicator in the channel.
   * The indicator will only stop if this is called as many times as startTyping().
   * <info>It can take a few seconds for the client user to stop typing.</info>
   * @param {boolean} [force=false] Whether or not to reset the call count and force the indicator to stop
   * @example
   * // stop typing in a channel
   * channel.stopTyping();
   * @example
   * // force typing to fully stop in a channel
   * channel.stopTyping(true);
   */
  stopTyping(force = false) {
    if (this.client.user._typing.has(this.id)) {
      const entry = this.client.user._typing.get(this.id);
      entry.count--;
      if (entry.count <= 0 || force) {
        this.client.clearInterval(entry.interval);
        this.client.user._typing.delete(this.id);
      }
    }
  }

  /**
   * Whether or not the typing indicator is being shown in the channel.
   * @type {boolean}
   * @readonly
   */
  get typing() {
    return this.client.user._typing.has(this.id);
  }

  /**
   * Number of times `startTyping` has been called.
   * @type {number}
   * @readonly
   */
  get typingCount() {
    if (this.client.user._typing.has(this.id)) return this.client.user._typing.get(this.id).count;
    return 0;
  }

  /**
   * Creates a Message Collector
   * @param {CollectorFilterFunction} filter The filter to create the collector with
   * @param {CollectorOptions} [options={}] The options to pass to the collector
   * @returns {MessageCollector}
   * @example
   * // create a message collector
   * const collector = channel.createCollector(
   *  m => m.content.includes('discord'),
   *  { time: 15000 }
   * );
   * collector.on('message', m => console.log(`Collected ${m.content}`));
   * collector.on('end', collected => console.log(`Collected ${collected.size} items`));
   */
  createCollector(filter, options = {}) {
    return new MessageCollector(this, filter, options);
  }

  /**
   * An object containing the same properties as CollectorOptions, but a few more:
   * @typedef {CollectorOptions} AwaitMessagesOptions
   * @property {string[]} [errors] Stop/end reasons that cause the promise to reject
   */

  /**
   * Similar to createCollector but in promise form. Resolves with a collection of messages that pass the specified
   * filter.
   * @param {CollectorFilterFunction} filter The filter function to use
   * @param {AwaitMessagesOptions} [options={}] Optional options to pass to the internal collector
   * @returns {Promise<Collection<string, Message>>}
   * @example
   * // await !vote messages
   * const filter = m => m.content.startsWith('!vote');
   * // errors: ['time'] treats ending because of the time limit as an error
   * channel.awaitMessages(filter, { max: 4, time: 60000, errors: ['time'] })
   *  .then(collected => console.log(collected.size))
   *  .catch(collected => console.log(`After a minute, only ${collected.size} out of 4 voted.`));
   */
  awaitMessages(filter, options = {}) {
    return new Promise((resolve, reject) => {
      const collector = this.createCollector(filter, options);
      collector.on('end', (collection, reason) => {
        if (options.errors && options.errors.includes(reason)) {
          reject(collection);
        } else {
          resolve(collection);
        }
      });
    });
  }

  /**
   * Bulk delete given messages.
   * <warn>This is only available when using a bot account.</warn>
   * @param {Collection<string, Message>|Message[]|number} messages Messages to delete, or number of messages to delete
   * @returns {Promise<Collection<string, Message>>} Deleted messages
   */
  bulkDelete(messages) {
    if (!isNaN(messages)) return this.fetchMessages({ limit: messages }).then(msgs => this.bulkDelete(msgs));
    if (messages instanceof Array || messages instanceof Collection) {
      const messageIDs = messages instanceof Collection ? messages.keyArray() : messages.map(m => m.id);
      return this.client.rest.methods.bulkDeleteMessages(this, messageIDs);
    }
    throw new TypeError('The messages must be an Array, Collection, or number.');
  }

  _cacheMessage(message) {
    const maxSize = this.client.options.messageCacheMaxSize;
    if (maxSize === 0) return null;
    if (this.messages.size >= maxSize && maxSize > 0) this.messages.delete(this.messages.firstKey());
    this.messages.set(message.id, message);
    return message;
  }
}

exports.applyToClass = (structure, full = false) => {
  const props = ['send'];
  if (full) {
    props.push('_cacheMessage');
    props.push('fetchMessages');
    props.push('fetchMessage');
    props.push('bulkDelete');
    props.push('startTyping');
    props.push('stopTyping');
    props.push('typing');
    props.push('typingCount');
    props.push('fetchPinnedMessages');
    props.push('createCollector');
    props.push('awaitMessages');
  }
  for (const prop of props) {
    Object.defineProperty(structure.prototype, prop, Object.getOwnPropertyDescriptor(TextBasedChannel.prototype, prop));
  }
};

const Constants = require('../util/Constants');

/*
{ type: 0, id: '123123', name: 'heavy-testing' } }
*/

/**
 * Represents a guild channel that the client only has limited information for - e.g. from invites.
 */
class PartialGuildChannel {
  constructor(client, data) {
    /**
     * The Client that instantiated this PartialGuildChannel
     * @type {Client}
     */
    this.client = client;
    Object.defineProperty(this, 'client', { enumerable: false, configurable: false });

    this.setup(data);
  }

  setup(data) {
    /**
     * The ID of this guild channel
     * @type {string}
     */
    this.id = data.id;

    /**
     * The name of this guild channel
     * @type {string}
     */
    this.name = data.name;

    /**
     * The type of this guild channel - `text` or `voice`
     * @type {string}
     */
    this.type = Constants.ChannelTypes.text === data.type ? 'text' : 'voice';
  }
}

module.exports = PartialGuildChannel;

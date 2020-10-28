'use strict';

const Action = require('./Action');
const { Events } = require('../../util/Constants');

class WebhooksUpdate extends Action {
  handle(data) {
    const client = this.client;
    const channel = client.channels.cache.get(data.channel_id);
    /**
     * Emitted whenever a guild channel has its webhooks changed. Requires the GUILD_WEBHOOKS intent.
     * @event Client#webhookUpdate
     * @param {TextChannel} channel The channel that had a webhook update
     */
    if (channel) client.emit(Events.WEBHOOKS_UPDATE, channel);
  }
}

module.exports = WebhooksUpdate;

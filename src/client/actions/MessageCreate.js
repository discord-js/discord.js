'use strict';

const Action = require('./Action');
const { Events } = require('../../util/Constants');

class MessageCreateAction extends Action {
  handle(data) {
    const client = this.client;
    const channel = this.getChannel(data);
    if (channel) {
      const existing = channel.messages.cache.get(data.id);
      if (existing) return { message: existing };
      const message = channel.messages.add(data);
      const user = message.author;
      const member = message.member;
      channel.lastMessageID = data.id;
      if (user) {
        user.lastMessageID = data.id;
        user.lastMessageChannelID = channel.id;
      }
      if (member) {
        member.lastMessageID = data.id;
        member.lastMessageChannelID = channel.id;
      }

      /**
       * Emitted whenever a message is created.
       * @event Client#messageCreate
       * @param {Message} message The created message
       */
      client.emit(Events.MESSAGE_CREATE, message);
      if (client.listenerCount('message')) {
        process.emitWarning('message listener is deprecated', {
          code: 'CLIENT_MESSAGE_EVENT',
          detail: 'The event messageCreate should be used instead.',
        });

        /**
         * Emitted whenever a message is created.
         * @event Client#message
         * @param {Message} message The created message
         * @deprecated
         */
        client.emit('message', message);
      }

      return { message };
    }

    return {};
  }
}

module.exports = MessageCreateAction;

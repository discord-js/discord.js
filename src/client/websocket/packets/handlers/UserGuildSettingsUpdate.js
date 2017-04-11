const AbstractHandler = require('./AbstractHandler');
const Constants = require('../../../../util/Constants');

class UserGuildSettingsUpdateHandler extends AbstractHandler {
  handle(packet) {
    const client = this.packetManager.client;
    client.user.guildSettings.patch(packet.d);
    client.emit(Constants.Events.USER_GUILD_SETTINGS_UPDATE, client.user.guildSettings);
  }
}

/**
 * Emitted when the client user's settings update
 * @event Client#clientUserGuildSettingsUpdate
 * @param {ClientUserGuildSettings} clientUserGuildSettings The new client user settings
 */

module.exports = UserGuildSettingsUpdateHandler;

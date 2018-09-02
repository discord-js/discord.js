class ActionsManager {
  constructor(client) {
    this.client = client;

    this.register(require('./MessageCreate'));
    this.register(require('./MessageDelete'));
    this.register(require('./MessageDeleteBulk'));
    this.register(require('./MessageUpdate'));
    this.register(require('./MessageReactionAdd'));
    this.register(require('./MessageReactionRemove'));
    this.register(require('./MessageReactionRemoveAll'));
    this.register(require('./ChannelCreate'));
    this.register(require('./ChannelDelete'));
    this.register(require('./ChannelUpdate'));
    this.register(require('./GuildDelete'));
    this.register(require('./GuildUpdate'));
    this.register(require('./GuildMemberRemove'));
    this.register(require('./GuildBanAdd'));
    this.register(require('./GuildBanRemove'));
    this.register(require('./GuildRoleCreate'));
    this.register(require('./GuildRoleDelete'));
    this.register(require('./GuildRoleUpdate'));
    this.register(require('./UserUpdate'));
    this.register(require('./GuildEmojiCreate'));
    this.register(require('./GuildEmojiDelete'));
    this.register(require('./GuildEmojiUpdate'));
    this.register(require('./GuildEmojisUpdate'));
    this.register(require('./GuildRolesPositionUpdate'));
    this.register(require('./GuildChannelsPositionUpdate'));
  }

  register(Action) {
    this[Action.name.replace(/Action$/, '')] = new Action(this.client);
  }
}

module.exports = ActionsManager;

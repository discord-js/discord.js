const Util = require('./util/Util');

module.exports = {
  // "Root" classes (starting points)
  Client: require('./client/Client'),
  Shard: require('./sharding/Shard'),
  ShardClientUtil: require('./sharding/ShardClientUtil'),
  ShardingManager: require('./sharding/ShardingManager'),
  WebhookClient: require('./client/WebhookClient'),

  // Utilities
  Collection: require('./util/Collection'),
  Constants: require('./util/Constants'),
  EvaluatedPermissions: require('./util/Permissions'),
  Permissions: require('./util/Permissions'),
  Snowflake: require('./util/Snowflake'),
  SnowflakeUtil: require('./util/Snowflake'),
  Util: Util,
  util: Util,
  version: require('../package').version,

  // Shortcuts to Util methods
  escapeMarkdown: Util.escapeMarkdown,
  fetchRecommendedShards: Util.fetchRecommendedShards,
  splitMessage: Util.splitMessage,

  // Structures
  Channel: require('./structures/Channel'),
  ClientOAuth2Application: require('./structures/ClientOAuth2Application'),
  ClientUser: require('./structures/ClientUser'),
  DMChannel: require('./structures/DMChannel'),
  Emoji: require('./structures/Emoji'),
  Game: require('./structures/Presence').Game,
  GroupDMChannel: require('./structures/GroupDMChannel'),
  Guild: require('./structures/Guild'),
  GuildChannel: require('./structures/GuildChannel'),
  GuildMember: require('./structures/GuildMember'),
  Invite: require('./structures/Invite'),
  Message: require('./structures/Message'),
  MessageAttachment: require('./structures/MessageAttachment'),
  MessageCollector: require('./structures/MessageCollector'),
  MessageEmbed: require('./structures/MessageEmbed'),
  MessageReaction: require('./structures/MessageReaction'),
  OAuth2Application: require('./structures/OAuth2Application'),
  PartialGuild: require('./structures/PartialGuild'),
  PartialGuildChannel: require('./structures/PartialGuildChannel'),
  PermissionOverwrites: require('./structures/PermissionOverwrites'),
  Presence: require('./structures/Presence').Presence,
  ReactionEmoji: require('./structures/ReactionEmoji'),
  RichEmbed: require('./structures/RichEmbed'),
  Role: require('./structures/Role'),
  TextChannel: require('./structures/TextChannel'),
  User: require('./structures/User'),
  VoiceChannel: require('./structures/VoiceChannel'),
  Webhook: require('./structures/Webhook'),
};

if (require('os').platform() === 'browser') window.Discord = module.exports; // eslint-disable-line no-undef

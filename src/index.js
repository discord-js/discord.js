'use strict';

// "Root" classes (starting points)
exports.BaseClient = require('./client/BaseClient');
exports.Client = require('./client/Client');
exports.Shard = require('./sharding/Shard');
exports.ShardClientUtil = require('./sharding/ShardClientUtil');
exports.ShardingManager = require('./sharding/ShardingManager');
exports.WebhookClient = require('./client/WebhookClient');

// Utilities
exports.ActivityFlags = require('./util/ActivityFlags');
exports.ApplicationFlags = require('./util/ApplicationFlags');
exports.BaseManager = require('./managers/BaseManager');
exports.BitField = require('./util/BitField');
exports.Collection = require('@discordjs/collection').Collection;
exports.Constants = require('./util/Constants');
exports.DataResolver = require('./util/DataResolver');
exports.DiscordAPIError = require('./rest/DiscordAPIError');
exports.Formatters = require('./util/Formatters');
exports.GuildMemberFlags = require('./util/GuildMemberFlags');
exports.HTTPError = require('./rest/HTTPError');
exports.Intents = require('./util/Intents');
exports.LimitedCollection = require('./util/LimitedCollection');
exports.MessageFlags = require('./util/MessageFlags');
exports.Options = require('./util/Options');
exports.Permissions = require('./util/Permissions');
exports.RateLimitError = require('./rest/RateLimitError');
exports.SnowflakeUtil = require('./util/SnowflakeUtil');
exports.Sweepers = require('./util/Sweepers');
exports.SystemChannelFlags = require('./util/SystemChannelFlags');
exports.ThreadMemberFlags = require('./util/ThreadMemberFlags');
exports.UserFlags = require('./util/UserFlags');
exports.Util = require('./util/Util');
exports.version = require('../package.json').version;

// Managers
exports.ApplicationCommandManager = require('./managers/ApplicationCommandManager');
exports.ApplicationCommandPermissionsManager = require('./managers/ApplicationCommandPermissionsManager');
exports.AutoModerationRuleManager = require('./managers/AutoModerationRuleManager');
exports.BaseGuildEmojiManager = require('./managers/BaseGuildEmojiManager');
exports.CachedManager = require('./managers/CachedManager');
exports.ChannelManager = require('./managers/ChannelManager');
exports.ClientVoiceManager = require('./client/voice/ClientVoiceManager');
exports.DataManager = require('./managers/DataManager');
exports.GuildApplicationCommandManager = require('./managers/GuildApplicationCommandManager');
exports.GuildBanManager = require('./managers/GuildBanManager');
exports.GuildChannelManager = require('./managers/GuildChannelManager');
exports.GuildEmojiManager = require('./managers/GuildEmojiManager');
exports.GuildEmojiRoleManager = require('./managers/GuildEmojiRoleManager');
exports.GuildInviteManager = require('./managers/GuildInviteManager');
exports.GuildManager = require('./managers/GuildManager');
exports.GuildMemberManager = require('./managers/GuildMemberManager');
exports.GuildMemberRoleManager = require('./managers/GuildMemberRoleManager');
exports.GuildScheduledEventManager = require('./managers/GuildScheduledEventManager');
exports.GuildStickerManager = require('./managers/GuildStickerManager');
exports.MessageManager = require('./managers/MessageManager');
exports.PermissionOverwriteManager = require('./managers/PermissionOverwriteManager');
exports.PresenceManager = require('./managers/PresenceManager');
exports.ReactionManager = require('./managers/ReactionManager');
exports.ReactionUserManager = require('./managers/ReactionUserManager');
exports.RoleManager = require('./managers/RoleManager');
exports.StageInstanceManager = require('./managers/StageInstanceManager');
exports.ThreadManager = require('./managers/ThreadManager');
exports.ThreadMemberManager = require('./managers/ThreadMemberManager');
exports.UserManager = require('./managers/UserManager');
exports.VoiceStateManager = require('./managers/VoiceStateManager');
exports.WebSocketManager = require('./client/websocket/WebSocketManager');
exports.WebSocketShard = require('./client/websocket/WebSocketShard');

// Structures
exports.Activity = require('./structures/Presence').Activity;
exports.AnonymousGuild = require('./structures/AnonymousGuild');
exports.Application = require('./structures/interfaces/Application');
exports.ApplicationCommand = require('./structures/ApplicationCommand');
exports.ApplicationRoleConnectionMetadata =
  require('./structures/ApplicationRoleConnectionMetadata').ApplicationRoleConnectionMetadata;
exports.AutocompleteInteraction = require('./structures/AutocompleteInteraction');
exports.AutoModerationActionExecution = require('./structures/AutoModerationActionExecution');
exports.AutoModerationRule = require('./structures/AutoModerationRule');
exports.Base = require('./structures/Base');
exports.BaseCommandInteraction = require('./structures/BaseCommandInteraction');
exports.BaseGuild = require('./structures/BaseGuild');
exports.BaseGuildEmoji = require('./structures/BaseGuildEmoji');
exports.BaseGuildTextChannel = require('./structures/BaseGuildTextChannel');
exports.BaseGuildVoiceChannel = require('./structures/BaseGuildVoiceChannel');
exports.BaseMessageComponent = require('./structures/BaseMessageComponent');
exports.ButtonInteraction = require('./structures/ButtonInteraction');
exports.CategoryChannel = require('./structures/CategoryChannel');
exports.Channel = require('./structures/Channel').Channel;
exports.ClientApplication = require('./structures/ClientApplication');
exports.ClientPresence = require('./structures/ClientPresence');
exports.ClientUser = require('./structures/ClientUser');
exports.Collector = require('./structures/interfaces/Collector');
exports.CommandInteraction = require('./structures/CommandInteraction');
exports.CommandInteractionOptionResolver = require('./structures/CommandInteractionOptionResolver');
exports.ContextMenuInteraction = require('./structures/ContextMenuInteraction');
exports.DMChannel = require('./structures/DMChannel');
exports.Emoji = require('./structures/Emoji').Emoji;
exports.Guild = require('./structures/Guild').Guild;
exports.GuildAuditLogs = require('./structures/GuildAuditLogs');
exports.GuildAuditLogsEntry = require('./structures/GuildAuditLogs').Entry;
exports.GuildBan = require('./structures/GuildBan');
exports.GuildChannel = require('./structures/GuildChannel');
exports.GuildEmoji = require('./structures/GuildEmoji');
exports.GuildMember = require('./structures/GuildMember').GuildMember;
exports.GuildPreview = require('./structures/GuildPreview');
exports.GuildPreviewEmoji = require('./structures/GuildPreviewEmoji');
exports.GuildScheduledEvent = require('./structures/GuildScheduledEvent').GuildScheduledEvent;
exports.GuildTemplate = require('./structures/GuildTemplate');
exports.Integration = require('./structures/Integration');
exports.IntegrationApplication = require('./structures/IntegrationApplication');
exports.Interaction = require('./structures/Interaction');
exports.InteractionCollector = require('./structures/InteractionCollector');
exports.InteractionWebhook = require('./structures/InteractionWebhook');
exports.Invite = require('./structures/Invite');
exports.InviteStageInstance = require('./structures/InviteStageInstance');
exports.InviteGuild = require('./structures/InviteGuild');
exports.Message = require('./structures/Message').Message;
exports.MessageActionRow = require('./structures/MessageActionRow');
exports.MessageAttachment = require('./structures/MessageAttachment');
exports.MessageButton = require('./structures/MessageButton');
exports.MessageCollector = require('./structures/MessageCollector');
exports.MessageComponentInteraction = require('./structures/MessageComponentInteraction');
exports.MessageContextMenuInteraction = require('./structures/MessageContextMenuInteraction');
exports.MessageEmbed = require('./structures/MessageEmbed');
exports.MessageMentions = require('./structures/MessageMentions');
exports.MessagePayload = require('./structures/MessagePayload');
exports.MessageReaction = require('./structures/MessageReaction');
exports.MessageSelectMenu = require('./structures/MessageSelectMenu');
exports.Modal = require('./structures/Modal');
exports.ModalSubmitInteraction = require('./structures/ModalSubmitInteraction');
exports.NewsChannel = require('./structures/NewsChannel');
exports.OAuth2Guild = require('./structures/OAuth2Guild');
exports.PartialGroupDMChannel = require('./structures/PartialGroupDMChannel');
exports.PermissionOverwrites = require('./structures/PermissionOverwrites');
exports.Presence = require('./structures/Presence').Presence;
exports.ReactionCollector = require('./structures/ReactionCollector');
exports.ReactionEmoji = require('./structures/ReactionEmoji');
exports.RichPresenceAssets = require('./structures/Presence').RichPresenceAssets;
exports.Role = require('./structures/Role').Role;
exports.SelectMenuInteraction = require('./structures/SelectMenuInteraction');
exports.StageChannel = require('./structures/StageChannel');
exports.StageInstance = require('./structures/StageInstance').StageInstance;
exports.Sticker = require('./structures/Sticker').Sticker;
exports.StickerPack = require('./structures/StickerPack');
exports.StoreChannel = require('./structures/StoreChannel');
exports.Team = require('./structures/Team');
exports.TeamMember = require('./structures/TeamMember');
exports.TextChannel = require('./structures/TextChannel');
exports.TextInputComponent = require('./structures/TextInputComponent');
exports.ThreadChannel = require('./structures/ThreadChannel');
exports.ThreadMember = require('./structures/ThreadMember');
exports.Typing = require('./structures/Typing');
exports.User = require('./structures/User');
exports.UserContextMenuInteraction = require('./structures/UserContextMenuInteraction');
exports.VoiceChannel = require('./structures/VoiceChannel');
exports.VoiceRegion = require('./structures/VoiceRegion');
exports.VoiceState = require('./structures/VoiceState');
exports.Webhook = require('./structures/Webhook');
exports.Widget = require('./structures/Widget');
exports.WidgetMember = require('./structures/WidgetMember');
exports.WelcomeChannel = require('./structures/WelcomeChannel');
exports.WelcomeScreen = require('./structures/WelcomeScreen');

exports.WebSocket = require('./WebSocket');

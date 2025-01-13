'use strict';

const DjsErrorCodes = require('./ErrorCodes');

const Messages = {
  [DjsErrorCodes.ClientInvalidOption]: (prop, must) => `The ${prop} option must be ${must}`,
  [DjsErrorCodes.ClientInvalidProvidedShards]: 'None of the provided shards were valid.',
  [DjsErrorCodes.ClientMissingIntents]: 'Valid intents must be provided for the Client.',
  [DjsErrorCodes.ClientNotReady]: action => `The client needs to be logged in to ${action}.`,

  [DjsErrorCodes.TokenInvalid]: 'An invalid token was provided.',
  [DjsErrorCodes.TokenMissing]: 'Request to use token, but token was unavailable to the client.',
  [DjsErrorCodes.ApplicationCommandPermissionsTokenMissing]:
    'Editing application command permissions requires an OAuth2 bearer token, but none was provided.',

  [DjsErrorCodes.BitFieldInvalid]: bit => `Invalid bitfield flag or number: ${bit}.`,

  [DjsErrorCodes.ShardingNoShards]: 'No shards have been spawned.',
  [DjsErrorCodes.ShardingInProcess]: 'Shards are still being spawned.',
  [DjsErrorCodes.ShardingInvalidEvalBroadcast]: 'Script to evaluate must be a function',
  [DjsErrorCodes.ShardingShardNotFound]: id => `Shard ${id} could not be found.`,
  [DjsErrorCodes.ShardingAlreadySpawned]: count => `Already spawned ${count} shards.`,
  [DjsErrorCodes.ShardingProcessExists]: id => `Shard ${id} already has an active process.`,
  [DjsErrorCodes.ShardingWorkerExists]: id => `Shard ${id} already has an active worker.`,
  [DjsErrorCodes.ShardingReadyTimeout]: id => `Shard ${id}'s Client took too long to become ready.`,
  [DjsErrorCodes.ShardingReadyDisconnected]: id => `Shard ${id}'s Client disconnected before becoming ready.`,
  [DjsErrorCodes.ShardingReadyDied]: id => `Shard ${id}'s process exited before its Client became ready.`,
  [DjsErrorCodes.ShardingNoChildExists]: id => `Shard ${id} has no active process or worker.`,
  [DjsErrorCodes.ShardingShardMiscalculation]: (shard, guild, count) =>
    `Calculated invalid shard ${shard} for guild ${guild} with ${count} shards.`,

  [DjsErrorCodes.ColorRange]: 'Color must be within the range 0 - 16777215 (0xFFFFFF).',
  [DjsErrorCodes.ColorConvert]: color => `Unable to convert "${color}" to a number.`,

  [DjsErrorCodes.InviteOptionsMissingChannel]:
    'A valid guild channel must be provided when GuildScheduledEvent is EXTERNAL.',

  [DjsErrorCodes.InteractionCollectorError]: reason =>
    `Collector received no interactions before ending with reason: ${reason}`,

  [DjsErrorCodes.FileNotFound]: file => `File could not be found: ${file}`,

  [DjsErrorCodes.UserNoDMChannel]: 'No DM Channel exists!',

  [DjsErrorCodes.VoiceNotStageChannel]: 'You are only allowed to do this in stage channels.',

  [DjsErrorCodes.VoiceStateNotOwn]:
    'You cannot self-deafen/mute/request to speak on VoiceStates that do not belong to the ClientUser.',
  [DjsErrorCodes.VoiceStateInvalidType]: name => `${name} must be a boolean.`,

  [DjsErrorCodes.ReqResourceType]: 'The resource must be a string, Buffer or a valid file stream.',

  [DjsErrorCodes.MessageBulkDeleteType]: 'The messages must be an Array, Collection, or number.',
  [DjsErrorCodes.MessageContentType]: 'Message content must be a string.',
  [DjsErrorCodes.MessageNonceRequired]: 'Message nonce is required when enforceNonce is true.',
  [DjsErrorCodes.MessageNonceType]: 'Message nonce must be an integer or a string.',

  [DjsErrorCodes.BanResolveId]: (ban = false) => `Couldn't resolve the user id to ${ban ? 'ban' : 'unban'}.`,
  [DjsErrorCodes.FetchBanResolveId]: "Couldn't resolve the user id to fetch the ban.",

  [DjsErrorCodes.PruneDaysType]: 'Days must be a number',

  [DjsErrorCodes.GuildChannelResolve]: 'Could not resolve channel to a guild channel.',
  [DjsErrorCodes.GuildVoiceChannelResolve]: 'Could not resolve channel to a guild voice channel.',
  [DjsErrorCodes.GuildChannelOrphan]: 'Could not find a parent to this guild channel.',
  [DjsErrorCodes.GuildChannelUnowned]: "The fetched channel does not belong to this manager's guild.",
  [DjsErrorCodes.GuildOwned]: 'Guild is owned by the client.',
  [DjsErrorCodes.GuildMembersTimeout]: "Members didn't arrive in time.",
  [DjsErrorCodes.GuildUncachedMe]: 'The client user as a member of this guild is uncached.',
  [DjsErrorCodes.ChannelNotCached]: 'Could not find the channel where this message came from in the cache!',
  [DjsErrorCodes.StageChannelResolve]: 'Could not resolve channel to a stage channel.',
  [DjsErrorCodes.GuildScheduledEventResolve]: 'Could not resolve the guild scheduled event.',
  [DjsErrorCodes.FetchOwnerId]: type => `Couldn't resolve the ${type} ownerId to fetch the ${type} member.`,

  [DjsErrorCodes.InvalidType]: (name, expected, an = false) => `Supplied ${name} is not a${an ? 'n' : ''} ${expected}.`,
  [DjsErrorCodes.InvalidElement]: (type, name, elem) => `Supplied ${type} ${name} includes an invalid element: ${elem}`,

  [DjsErrorCodes.MessageThreadParent]: 'The message was not sent in a guild text or announcement channel',
  [DjsErrorCodes.MessageExistingThread]: 'The message already has a thread',
  [DjsErrorCodes.ThreadInvitableType]: type => `Invitable cannot be edited on ${type}`,
  [DjsErrorCodes.NotAThreadOfParent]: 'Provided ThreadChannelResolvable is not a thread of the parent channel.',

  [DjsErrorCodes.WebhookMessage]: 'The message was not sent by a webhook.',
  [DjsErrorCodes.WebhookTokenUnavailable]: 'This action requires a webhook token, but none is available.',
  [DjsErrorCodes.WebhookURLInvalid]: 'The provided webhook URL is not valid.',
  [DjsErrorCodes.WebhookApplication]: 'This message webhook belongs to an application and cannot be fetched.',
  [DjsErrorCodes.MessageReferenceMissing]: 'The message does not reference another message',

  [DjsErrorCodes.EmojiType]: 'Emoji must be a string or GuildEmoji/ReactionEmoji',
  [DjsErrorCodes.EmojiManaged]: 'Emoji is managed and has no Author.',
  [DjsErrorCodes.MissingManageGuildExpressionsPermission]: guild =>
    `Client must have Manage Guild Expressions permission in guild ${guild} to see emoji authors.`,

  [DjsErrorCodes.NotGuildSticker]: 'Sticker is a standard (non-guild) sticker and has no author.',

  [DjsErrorCodes.ReactionResolveUser]: "Couldn't resolve the user id to remove from the reaction.",

  [DjsErrorCodes.InviteResolveCode]: 'Could not resolve the code to fetch the invite.',

  [DjsErrorCodes.InviteNotFound]: 'Could not find the requested invite.',

  [DjsErrorCodes.DeleteGroupDMChannel]: "Bots don't have access to Group DM Channels and cannot delete them",
  [DjsErrorCodes.FetchGroupDMChannel]: "Bots don't have access to Group DM Channels and cannot fetch them",

  [DjsErrorCodes.MemberFetchNonceLength]: 'Nonce length must not exceed 32 characters.',

  [DjsErrorCodes.GlobalCommandPermissions]:
    'Permissions for global commands may only be fetched or modified by providing a GuildResolvable ' +
    "or from a guild's application command manager.",
  [DjsErrorCodes.GuildUncachedEntityResolve]: type =>
    `Cannot resolve ${type} from an arbitrary guild, provide an id instead`,

  [DjsErrorCodes.InteractionAlreadyReplied]: 'The reply to this interaction has already been sent or deferred.',
  [DjsErrorCodes.InteractionNotReplied]: 'The reply to this interaction has not been sent or deferred.',

  [DjsErrorCodes.CommandInteractionOptionNotFound]: name => `Required option "${name}" not found.`,
  [DjsErrorCodes.CommandInteractionOptionType]: (name, type, expected) =>
    `Option "${name}" is of type: ${type}; expected ${expected}.`,
  [DjsErrorCodes.CommandInteractionOptionEmpty]: (name, type) =>
    `Required option "${name}" is of type: ${type}; expected a non-empty value.`,
  [DjsErrorCodes.CommandInteractionOptionNoSubcommand]: 'No subcommand specified for interaction.',
  [DjsErrorCodes.CommandInteractionOptionNoSubcommandGroup]: 'No subcommand group specified for interaction.',
  [DjsErrorCodes.CommandInteractionOptionInvalidChannelType]: (name, type, expected) =>
    `The type of channel of the option "${name}" is: ${type}; expected ${expected}.`,
  [DjsErrorCodes.AutocompleteInteractionOptionNoFocusedOption]: 'No focused option for autocomplete interaction.',

  [DjsErrorCodes.ModalSubmitInteractionFieldNotFound]: customId =>
    `Required field with custom id "${customId}" not found.`,
  [DjsErrorCodes.ModalSubmitInteractionFieldType]: (customId, type, expected) =>
    `Field with custom id "${customId}" is of type: ${type}; expected ${expected}.`,

  [DjsErrorCodes.InvalidMissingScopes]: 'At least one valid scope must be provided for the invite',
  [DjsErrorCodes.InvalidScopesWithPermissions]: 'Permissions cannot be set without the bot scope.',

  [DjsErrorCodes.NotImplemented]: (what, name) => `Method ${what} not implemented on ${name}.`,

  [DjsErrorCodes.SweepFilterReturn]: 'The return value of the sweepFilter function was not false or a Function',

  [DjsErrorCodes.GuildForumMessageRequired]: 'You must provide a message to create a guild forum thread',

  [DjsErrorCodes.EntitlementCreateInvalidOwner]:
    'You must provide either a guild or a user to create an entitlement, but not both',

  [DjsErrorCodes.BulkBanUsersOptionEmpty]: 'Option "users" array or collection is empty',

  [DjsErrorCodes.PollAlreadyExpired]: 'This poll has already expired.',

  [DjsErrorCodes.PermissionOverwritesTypeMandatory]: '"overwrite.type" is mandatory if "overwrite.id" is a Snowflake',
  [DjsErrorCodes.PermissionOverwritesTypeMismatch]: expected =>
    `"overwrite.id" is a ${expected.toLowerCase()} object, ` +
    `but "overwrite.type" is defined and not equal to OverwriteType.${expected}`,
};

module.exports = Messages;

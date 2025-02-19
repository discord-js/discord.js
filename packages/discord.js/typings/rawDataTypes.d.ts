// These are aggregate types that are used in the typings file but do not exist as actual exported values.
// To prevent them from showing up in an editor, they are imported from here instead of exporting them there directly.

import {
  APIEmoji,
  APIExtendedInvite,
  APIGuild,
  APIGuildMember,
  APIInteractionDataResolvedGuildMember,
  APIInteractionGuildMember,
  APIInvite,
  APIPartialEmoji,
  APIPartialGuild,
  APIStageInstance,
  APIUnavailableGuild,
  APIUser,
  APIWebhook,
  GatewayActivityEmoji,
  GatewayGuildMemberAddDispatchData,
  GatewayGuildMemberUpdateDispatchData,
  GatewayInviteCreateDispatchData,
  GatewayInviteDeleteDispatchData,
  GatewayPresenceUpdate,
  RESTAPIPartialCurrentUserGuild,
  RESTGetAPIWebhookWithTokenResult,
  RESTPatchAPIChannelMessageJSONBody,
  RESTPatchAPICurrentGuildMemberJSONBody,
  RESTPatchAPIInteractionFollowupJSONBody,
  RESTPatchAPIInteractionOriginalResponseJSONBody,
  RESTPatchAPIWebhookWithTokenJSONBody,
  RESTPostAPIChannelMessageJSONBody,
  RESTPostAPIInteractionCallbackFormDataBody,
  RESTPostAPIInteractionFollowupJSONBody,
  RESTPostAPIWebhookWithTokenJSONBody,
  Snowflake,
} from 'discord-api-types/v10';
import { GuildChannel, Guild } from './index.js';

export type RawEmojiData =
  | APIEmoji
  | APIPartialEmoji
  | GatewayActivityEmoji
  | Omit<Partial<APIPartialEmoji>, 'animated'>;

export type RawBaseGuildData = APIGuild | APIUnavailableGuild | APIPartialGuild | RESTAPIPartialCurrentUserGuild;

export type RawGuildMemberData =
  | APIGuildMember
  | APIInteractionGuildMember
  | APIInteractionDataResolvedGuildMember
  | GatewayGuildMemberAddDispatchData
  | GatewayGuildMemberUpdateDispatchData
  | Required<RESTPatchAPICurrentGuildMemberJSONBody>
  | { user: { id: Snowflake } };

export type RawInviteData =
  | APIExtendedInvite
  | APIInvite
  | (GatewayInviteCreateDispatchData & { channel: GuildChannel; guild: Guild })
  | (GatewayInviteDeleteDispatchData & { channel: GuildChannel; guild: Guild });

export type RawMessagePayloadData =
  | RESTPostAPIChannelMessageJSONBody
  | RESTPatchAPIChannelMessageJSONBody
  | RESTPostAPIWebhookWithTokenJSONBody
  | RESTPatchAPIWebhookWithTokenJSONBody
  | RESTPostAPIInteractionCallbackFormDataBody
  | RESTPatchAPIInteractionOriginalResponseJSONBody
  | RESTPostAPIInteractionFollowupJSONBody
  | RESTPatchAPIInteractionFollowupJSONBody;

export type RawStageInstanceData =
  | APIStageInstance
  | (Partial<APIStageInstance> & Pick<APIStageInstance, 'id' | 'channel_id' | 'guild_id'>);

export type RawUserData =
  | (APIUser & { member?: Omit<APIGuildMember, 'user'> })
  | (GatewayPresenceUpdate['user'] & Pick<APIUser, 'username'>);

export type RawWebhookData =
  | APIWebhook
  | RESTGetAPIWebhookWithTokenResult
  | (Partial<APIWebhook> & Required<Pick<APIWebhook, 'id' | 'guild_id'>>);

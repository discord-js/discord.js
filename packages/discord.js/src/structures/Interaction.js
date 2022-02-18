'use strict';

const { DiscordSnowflake } = require('@sapphire/snowflake');
const { InteractionType, ApplicationCommandType, ComponentType } = require('discord-api-types/v9');
const Base = require('./Base');
const PermissionsBitField = require('../util/PermissionsBitField');

/**
 * Represents an interaction.
 * @extends {Base}
 */
class Interaction extends Base {
  constructor(client, data = {}) {
    super(client);

    this.data.type = data.type;
    this.data.id = data.id;

    /**
     * The interaction's token
     * @type {string}
     * @name Interaction#token
     * @readonly
     */
    Object.defineProperty(this, 'token', { value: data.token });

    this.data.application_id = data.application_id;
    this.data.channel_id = data.channel_id ?? null;
    this.data.guild_id = data.guild_id ?? null;
    this.data.user = this.client.users._add(data.user ?? data.member.user);
    this.data.member = data.member;
    this.data.version = data.version;
    this.data.locale = data.locale;
    this.data.guild_locale = data.guild_locale ?? null;
  }

  /**
   * The interaction's id
   * @type {Snowflake}
   */
  get id() {
    return this.data.id;
  }

  /**
   * The interaction's type
   * @type {InteractionType}
   */
  get type() {
    return this.data.type;
  }

  /**
   * The application's id
   * @type {Snowflake}
   */
  get applicationId() {
    return this.data.application_id;
  }

  /**
   * The id of the channel this interaction was sent in
   * @type {?Snowflake}
   */
  get channelId() {
    return this.data.channel_id;
  }

  /**
   * The id of the guild this interaction was sent in
   * @type {?Snowflake}
   */
  get guildId() {
    return this.data.guild_id;
  }

  /**
   * The user which sent this interaction
   * @type {User}
   */
  get user() {
    return this.client.users.resolve(this.data.user.id);
  }

  /**
   * If this interaction was sent in a guild, the member which sent it
   * @type {?(GuildMember|APIGuildMember)}
   */
  get member() {
    return this.data.member ? this.guild?.members._add(this.data.member) ?? this.data.member : null;
  }

  /**
   * The version
   * @type {number}
   */
  get version() {
    return this.data.version;
  }

  /**
   * The permissions of the member, if one exists, in the channel this interaction was executed in
   * @type {?Readonly<PermissionsBitField>}
   */
  get memberPermissions() {
    return this.member?.permissions ? new PermissionsBitField(this.member.permissions).freeze() : null;
  }

  /**
   * The locale of the user who invoked this interaction
   * @type {string}
   * @see {@link https://discord.com/developers/docs/reference#locales}
   */
  get locale() {
    return this.data.locale;
  }

  /**
   * The preferred locale from the guild this interaction was sent in
   * @type {?string}
   */
  get guildLocale() {
    return this.data.guild_locale;
  }

  /**
   * The timestamp the interaction was created at
   * @type {number}
   * @readonly
   */
  get createdTimestamp() {
    return DiscordSnowflake.timestampFrom(this.id);
  }

  /**
   * The time the interaction was created at
   * @type {Date}
   * @readonly
   */
  get createdAt() {
    return new Date(this.createdTimestamp);
  }

  /**
   * The channel this interaction was sent in
   * @type {?TextBasedChannels}
   * @readonly
   */
  get channel() {
    return this.client.channels.cache.get(this.channelId) ?? null;
  }

  /**
   * The guild this interaction was sent in
   * @type {?Guild}
   * @readonly
   */
  get guild() {
    return this.client.guilds.cache.get(this.guildId) ?? null;
  }

  /**
   * Indicates whether this interaction is received from a guild.
   * @returns {boolean}
   */
  inGuild() {
    return Boolean(this.guildId && this.member);
  }

  /**
   * Indicates whether or not this interaction is both cached and received from a guild.
   * @returns {boolean}
   */
  inCachedGuild() {
    return Boolean(this.guild && this.member);
  }

  /**
   * Indicates whether or not this interaction is received from an uncached guild.
   * @returns {boolean}
   */
  inRawGuild() {
    return Boolean(this.guildId && !this.guild && this.member);
  }

  /**
   * Indicates whether this interaction is a {@link CommandInteraction}.
   * @returns {boolean}
   */
  isCommand() {
    return this.type === InteractionType.ApplicationCommand;
  }

  /**
   * Indicates whether this interaction is a {@link ChatInputCommandInteraction}.
   * @returns {boolean}
   */
  isChatInputCommand() {
    return this.isCommand() && this.commandType === ApplicationCommandType.ChatInput;
  }

  /**
   * Indicates whether this interaction is a {@link ContextMenuCommandInteraction}
   * @returns {boolean}
   */
  isContextMenuCommand() {
    return this.isCommand() && [ApplicationCommandType.User, ApplicationCommandType.Message].includes(this.commandType);
  }

  /**
   * Indicates whether this interaction is a {@link UserContextMenuCommandInteraction}
   * @returns {boolean}
   */
  isUserContextMenuCommand() {
    return this.isContextMenuCommand() && this.commandType === ApplicationCommandType.User;
  }

  /**
   * Indicates whether this interaction is a {@link MessageContextMenuCommandInteraction}
   * @returns {boolean}
   */
  isMessageContextMenuCommand() {
    return this.isContextMenuCommand() && this.commandType === ApplicationCommandType.Message;
  }

  /**
   * Indicates whether this interaction is an {@link AutocompleteInteraction}
   * @returns {boolean}
   */
  isAutocomplete() {
    return this.type === InteractionType.ApplicationCommandAutocomplete;
  }

  /**
   * Indicates whether this interaction is a {@link MessageComponentInteraction}.
   * @returns {boolean}
   */
  isMessageComponent() {
    return this.type === InteractionType.MessageComponent;
  }

  /**
   * Indicates whether this interaction is a {@link ButtonInteraction}.
   * @returns {boolean}
   */
  isButton() {
    return this.isMessageComponent() && this.componentType === ComponentType.Button;
  }

  /**
   * Indicates whether this interaction is a {@link SelectMenuInteraction}.
   * @returns {boolean}
   */
  isSelectMenu() {
    return this.isMessageComponent() && this.componentType === ComponentType.SelectMenu;
  }

  /**
   * Indicates whether this interaction can be replied to.
   * @returns {boolean}
   */
  isRepliable() {
    return ![InteractionType.Ping, InteractionType.ApplicationCommandAutocomplete].includes(this.type);
  }
}

module.exports = Interaction;

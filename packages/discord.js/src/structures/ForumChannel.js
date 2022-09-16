'use strict';

const GuildChannel = require('./GuildChannel');
const GuildForumThreadManager = require('../managers/GuildForumThreadManager');
const { transformAPIGuildForumTag, transformAPIGuildDefaultReaction } = require('../util/Channels');

/**
 * @typedef {Object} GuildForumTagEmoji
 * @property {?Snowflake} id The id of a guild's custom emoji
 * @property {?string} name The unicode character of the emoji
 */

/**
 * @typedef {Object} GuildForumTag
 * @property {Snowflake} id The id of the tag
 * @property {string} name The name of the tag
 * @property {boolean} moderated Whether this tag can only be added to or removed from threads
 * by a member with the `ManageThreads` permission
 * @property {?GuildForumTagEmoji} emoji The emoji of this tag
 */

/**
 * @typedef {Object} DefaultReactionEmoji
 * @property {?Snowflake} emojiId The id of a guild's custom emoji
 * @property {?string} emojiName The unicode character of the emoji
 */

/**
 * Represents a channel that only contains threads
 * @extends {GuildChannel}
 */
class ForumChannel extends GuildChannel {
  constructor(guild, data, client) {
    super(guild, data, client, false);

    /**
     * A manager of the threads belonging to this channel
     * @type {GuildForumThreadManager}
     */
    this.threads = new GuildForumThreadManager(this);

    this._patch(data);
  }

  _patch(data) {
    super._patch(data);
    if ('available_tags' in data) {
      /**
       * The set of tags that can be used in this channel.
       * @type {GuildForumTag[]}
       */
      this.availableTags = data.available_tags.map(tag => transformAPIGuildForumTag(tag));
    } else {
      this.availableTags ??= [];
    }

    if ('default_reaction_emoji' in data) {
      /**
       * The emoji to show in the add reaction button on a thread in a guild forum channel
       * @type {?DefaultReactionEmoji}
       */
      this.defaultReactionEmoji = data.default_reaction_emoji
        ? transformAPIGuildDefaultReaction(data.default_reaction_emoji)
        : null;
    } else {
      this.defaultReactionEmoji ??= null;
    }

    if ('default_thread_rate_limit_per_user' in data) {
      /**
       * The initial rate limit per user (slowmode) to set on newly created threads in a channel.
       * @type {?number}
       */
      this.defaultThreadRateLimitPerUser = data.default_thread_rate_limit_per_user;
    } else {
      this.defaultThreadRateLimitPerUser ??= null;
    }
  }

  /**
   * Sets the available tags for this forum channel
   * @param {GuildForumTag[]} availableTags The tags to set as available in this channel
   * @param {string} [reason] Reason for changing the available tags
   * @returns {Promise<ForumChannel>}
   */
  setAvailableTags(availableTags, reason) {
    return this.edit({ availableTags, reason });
  }

  /**
   * Sets the default reaction emoji for this channel
   * @param {DefaultReactionEmoji} defaultReactionEmoji The emoji to set as the default reaction emoji
   * @param {string} [reason] Reason for changing the default reaction emoji
   * @returns {Promise<ForumChannel>}
   */
  async setDefaultReactionEmoji(defaultReactionEmoji, reason) {
    await this.edit({ defaultReactionEmoji, reason });
    return this;
  }

  /**
   * Sets the default rate limit per user (slowmode) for new threads in this channel
   * @param {number} defaultThreadRateLimitPerUser The rate limit to set on newly created threads in this channel
   * @param {string} [reason] Reason for changing the default rate limit
   * @returns {Promise<ForumChannel>}
   */
  async setDefaultThreadRateLimitPerUser(defaultThreadRateLimitPerUser, reason) {
    await this.edit({ defaultThreadRateLimitPerUser, reason });
    return this;
  }
}

module.exports = ForumChannel;

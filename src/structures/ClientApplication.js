'use strict';

const Team = require('./Team');
const Application = require('./interfaces/Application');
const ApplicationFlags = require('../util/ApplicationFlags');

/**
 * Represents a Client OAuth2 Application.
 * @extends {Application}
 */
class ClientApplication extends Application {
  _patch(data) {
    super._patch(data);

    /**
     * The flags this application has
     * @type {ApplicationFlags}
     */
    this.flags = data.flags ? new ApplicationFlags(data.flags) : this.flags;

    /**
     * The app's cover image
     * @type {?string}
     */
    this.cover = data.cover_image ?? this.cover ?? null;

    /**
     * The app's RPC origins, if enabled
     * @type {string[]}
     */
    this.rpcOrigins = data.rpc_origins ?? this.rpcOrigins ?? [];

    /**
     * If this app's bot requires a code grant when using the OAuth2 flow
     * @type {?boolean}
     */
    this.botRequireCodeGrant = data.bot_require_code_grant ?? this.botRequireCodeGrant ?? null;

    /**
     * If this app's bot is public
     * @type {?boolean}
     */
    this.botPublic = data.bot_public ?? this.botPublic ?? null;

    /**
     * The owner of this OAuth application
     * @type {?User|Team}
     */
    this.owner = data.team
      ? new Team(this.client, data.team)
      : data.owner
      ? this.client.users.add(data.owner)
      : this.owner ?? null;
  }

  /**
   * Whether this application is partial
   * @type {boolean}
   * @readonly
   */
  get partial() {
    return !this.name;
  }

  /**
   * Obtains this application from Discord.
   * @returns {Promise<ClientApplication>}
   */
  async fetch() {
    const app = await this.client.api.oauth2.applications('@me').get();
    this._patch(app);
    return this;
  }
}

module.exports = ClientApplication;

"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// package.json
var require_package = __commonJS({
  "package.json"(exports, module2) {
    module2.exports = {
      name: "@discordjs/rest",
      version: "0.5.0-dev",
      description: "The REST API for discord.js",
      scripts: {
        build: "tsup && tsc --emitDeclarationOnly --incremental",
        test: "jest --pass-with-no-tests --collect-coverage",
        lint: "prettier --check . && eslint src __tests__ --ext mjs,js,ts",
        format: "prettier --write . && eslint src __tests__ --ext mjs,js,ts --fix",
        docs: "typedoc --json docs/typedoc-out.json src/index.ts && node scripts/docs.mjs",
        prepublishOnly: "yarn build && yarn lint && yarn test",
        changelog: "git cliff --prepend ./CHANGELOG.md -u -c ./cliff.toml -r ../../ --include-path 'packages/rest/*'"
      },
      main: "./dist/index.js",
      module: "./dist/index.mjs",
      typings: "./dist/index.d.ts",
      exports: {
        import: "./dist/index.mjs",
        require: "./dist/index.js",
        types: "./dist/index.d.ts"
      },
      directories: {
        lib: "src",
        test: "__tests__"
      },
      files: [
        "dist"
      ],
      contributors: [
        "Crawl <icrawltogo@gmail.com>",
        "Amish Shah <amishshah.2k@gmail.com>",
        "SpaceEEC <spaceeec@yahoo.com>",
        "Vlad Frangu <kingdgrizzle@gmail.com>",
        "Antonio Roman <kyradiscord@gmail.com>"
      ],
      license: "Apache-2.0",
      keywords: [
        "discord",
        "api",
        "rest",
        "discordapp",
        "discordjs"
      ],
      repository: {
        type: "git",
        url: "git+https://github.com/discordjs/discord.js.git"
      },
      bugs: {
        url: "https://github.com/discordjs/discord.js/issues"
      },
      homepage: "https://discord.js.org",
      dependencies: {
        "@discordjs/collection": "workspace:^",
        "@sapphire/async-queue": "^1.3.1",
        "@sapphire/snowflake": "^3.2.1",
        "@types/node-fetch": "^2.6.1",
        "discord-api-types": "^0.29.0",
        "form-data": "^4.0.0",
        "node-fetch": "^2.6.7",
        tslib: "^2.3.1"
      },
      devDependencies: {
        "@babel/core": "^7.17.9",
        "@babel/plugin-proposal-decorators": "^7.17.9",
        "@babel/preset-env": "^7.16.11",
        "@babel/preset-typescript": "^7.16.7",
        "@discordjs/ts-docgen": "^0.4.1",
        "@types/jest": "^27.4.1",
        "@typescript-eslint/eslint-plugin": "^5.19.0",
        "@typescript-eslint/parser": "^5.19.0",
        "babel-plugin-const-enum": "^1.2.0",
        "babel-plugin-transform-typescript-metadata": "^0.3.2",
        eslint: "^8.13.0",
        "eslint-config-marine": "^9.4.1",
        "eslint-config-prettier": "^8.5.0",
        "eslint-plugin-import": "^2.26.0",
        jest: "^27.5.1",
        nock: "^13.2.4",
        prettier: "^2.6.2",
        tsup: "^5.12.5",
        typedoc: "^0.22.15",
        typescript: "^4.6.3"
      },
      engines: {
        node: ">=16.9.0"
      },
      publishConfig: {
        access: "public"
      }
    };
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ALLOWED_EXTENSIONS: () => ALLOWED_EXTENSIONS,
  ALLOWED_SIZES: () => ALLOWED_SIZES,
  ALLOWED_STICKER_EXTENSIONS: () => ALLOWED_STICKER_EXTENSIONS,
  CDN: () => CDN,
  DefaultRestOptions: () => DefaultRestOptions,
  DefaultUserAgent: () => DefaultUserAgent,
  DiscordAPIError: () => DiscordAPIError,
  HTTPError: () => HTTPError,
  REST: () => REST,
  RESTEvents: () => RESTEvents,
  RateLimitError: () => RateLimitError,
  RequestManager: () => RequestManager,
  RequestMethod: () => RequestMethod,
  makeURLSearchParams: () => makeURLSearchParams
});
module.exports = __toCommonJS(src_exports);

// src/lib/utils/constants.ts
var import_v10 = require("discord-api-types/v10");
var Package = require_package();
var DefaultUserAgent = `DiscordBot (${Package.homepage}, ${Package.version})`;
var DefaultRestOptions = {
  agent: {},
  api: "https://discord.com/api",
  authPrefix: "Bot",
  cdn: "https://cdn.discordapp.com",
  headers: {},
  invalidRequestWarningInterval: 0,
  globalRequestsPerSecond: 50,
  offset: 50,
  rejectOnRateLimit: null,
  retries: 3,
  timeout: 15e3,
  userAgentAppendix: `Node.js ${process.version}`,
  version: import_v10.APIVersion,
  hashSweepInterval: 144e5,
  hashLifetime: 864e5,
  handlerSweepInterval: 36e5
};
var RESTEvents = /* @__PURE__ */ ((RESTEvents2) => {
  RESTEvents2["Debug"] = "restDebug";
  RESTEvents2["InvalidRequestWarning"] = "invalidRequestWarning";
  RESTEvents2["RateLimited"] = "rateLimited";
  RESTEvents2["Request"] = "request";
  RESTEvents2["Response"] = "response";
  RESTEvents2["HashSweep"] = "hashSweep";
  RESTEvents2["HandlerSweep"] = "handlerSweep";
  return RESTEvents2;
})(RESTEvents || {});
var ALLOWED_EXTENSIONS = ["webp", "png", "jpg", "jpeg", "gif"];
var ALLOWED_STICKER_EXTENSIONS = ["png", "json"];
var ALLOWED_SIZES = [16, 32, 64, 128, 256, 512, 1024, 2048, 4096];

// src/lib/CDN.ts
var CDN = class {
  constructor(base = DefaultRestOptions.cdn) {
    this.base = base;
  }
  appAsset(clientId, assetHash, options) {
    return this.makeURL(`/app-assets/${clientId}/${assetHash}`, options);
  }
  appIcon(clientId, iconHash, options) {
    return this.makeURL(`/app-icons/${clientId}/${iconHash}`, options);
  }
  avatar(id, avatarHash, options) {
    return this.dynamicMakeURL(`/avatars/${id}/${avatarHash}`, avatarHash, options);
  }
  banner(id, bannerHash, options) {
    return this.dynamicMakeURL(`/banners/${id}/${bannerHash}`, bannerHash, options);
  }
  channelIcon(channelId, iconHash, options) {
    return this.makeURL(`/channel-icons/${channelId}/${iconHash}`, options);
  }
  defaultAvatar(discriminator) {
    return this.makeURL(`/embed/avatars/${discriminator}`, { extension: "png" });
  }
  discoverySplash(guildId, splashHash, options) {
    return this.makeURL(`/discovery-splashes/${guildId}/${splashHash}`, options);
  }
  emoji(emojiId, extension) {
    return this.makeURL(`/emojis/${emojiId}`, { extension });
  }
  guildMemberAvatar(guildId, userId, avatarHash, options) {
    return this.dynamicMakeURL(`/guilds/${guildId}/users/${userId}/avatars/${avatarHash}`, avatarHash, options);
  }
  icon(id, iconHash, options) {
    return this.dynamicMakeURL(`/icons/${id}/${iconHash}`, iconHash, options);
  }
  roleIcon(roleId, roleIconHash, options) {
    return this.makeURL(`/role-icons/${roleId}/${roleIconHash}`, options);
  }
  splash(guildId, splashHash, options) {
    return this.makeURL(`/splashes/${guildId}/${splashHash}`, options);
  }
  sticker(stickerId, extension) {
    return this.makeURL(`/stickers/${stickerId}`, {
      allowedExtensions: ALLOWED_STICKER_EXTENSIONS,
      extension: extension ?? "png"
    });
  }
  stickerPackBanner(bannerId, options) {
    return this.makeURL(`/app-assets/710982414301790216/store/${bannerId}`, options);
  }
  teamIcon(teamId, iconHash, options) {
    return this.makeURL(`/team-icons/${teamId}/${iconHash}`, options);
  }
  guildScheduledEventCover(scheduledEventId, coverHash, options) {
    return this.makeURL(`/guild-events/${scheduledEventId}/${coverHash}`, options);
  }
  dynamicMakeURL(route, hash, { forceStatic = false, ...options } = {}) {
    return this.makeURL(route, !forceStatic && hash.startsWith("a_") ? { ...options, extension: "gif" } : options);
  }
  makeURL(route, { allowedExtensions = ALLOWED_EXTENSIONS, extension = "webp", size } = {}) {
    extension = String(extension).toLowerCase();
    if (!allowedExtensions.includes(extension)) {
      throw new RangeError(`Invalid extension provided: ${extension}
Must be one of: ${allowedExtensions.join(", ")}`);
    }
    if (size && !ALLOWED_SIZES.includes(size)) {
      throw new RangeError(`Invalid size provided: ${size}
Must be one of: ${ALLOWED_SIZES.join(", ")}`);
    }
    const url = new URL(`${this.base}${route}.${extension}`);
    if (size) {
      url.searchParams.set("size", String(size));
    }
    return url.toString();
  }
};
__name(CDN, "CDN");

// src/lib/errors/DiscordAPIError.ts
function isErrorGroupWrapper(error) {
  return Reflect.has(error, "_errors");
}
__name(isErrorGroupWrapper, "isErrorGroupWrapper");
function isErrorResponse(error) {
  return typeof Reflect.get(error, "message") === "string";
}
__name(isErrorResponse, "isErrorResponse");
var DiscordAPIError = class extends Error {
  constructor(rawError, code, status, method, url, bodyData) {
    super(DiscordAPIError.getMessage(rawError));
    this.rawError = rawError;
    this.code = code;
    this.status = status;
    this.method = method;
    this.url = url;
    __publicField(this, "requestBody");
    this.requestBody = { files: bodyData.files, json: bodyData.body };
  }
  get name() {
    return `${DiscordAPIError.name}[${this.code}]`;
  }
  static getMessage(error) {
    let flattened = "";
    if ("code" in error) {
      if (error.errors) {
        flattened = [...this.flattenDiscordError(error.errors)].join("\n");
      }
      return error.message && flattened ? `${error.message}
${flattened}` : error.message || flattened || "Unknown Error";
    }
    return error.error_description ?? "No Description";
  }
  static *flattenDiscordError(obj, key = "") {
    if (isErrorResponse(obj)) {
      return yield `${key.length ? `${key}[${obj.code}]` : `${obj.code}`}: ${obj.message}`.trim();
    }
    for (const [k, v] of Object.entries(obj)) {
      const nextKey = k.startsWith("_") ? key : key ? Number.isNaN(Number(k)) ? `${key}.${k}` : `${key}[${k}]` : k;
      if (typeof v === "string") {
        yield v;
      } else if (isErrorGroupWrapper(v)) {
        for (const error of v._errors) {
          yield* this.flattenDiscordError(error, nextKey);
        }
      } else {
        yield* this.flattenDiscordError(v, nextKey);
      }
    }
  }
};
__name(DiscordAPIError, "DiscordAPIError");

// src/lib/errors/HTTPError.ts
var HTTPError = class extends Error {
  constructor(message, name, status, method, url, bodyData) {
    super(message);
    this.name = name;
    this.status = status;
    this.method = method;
    this.url = url;
    __publicField(this, "requestBody");
    this.requestBody = { files: bodyData.files, json: bodyData.body };
  }
};
__name(HTTPError, "HTTPError");

// src/lib/errors/RateLimitError.ts
var RateLimitError = class extends Error {
  constructor({ timeToReset, limit, method, hash, url, route, majorParameter, global }) {
    super();
    __publicField(this, "timeToReset");
    __publicField(this, "limit");
    __publicField(this, "method");
    __publicField(this, "hash");
    __publicField(this, "url");
    __publicField(this, "route");
    __publicField(this, "majorParameter");
    __publicField(this, "global");
    this.timeToReset = timeToReset;
    this.limit = limit;
    this.method = method;
    this.hash = hash;
    this.url = url;
    this.route = route;
    this.majorParameter = majorParameter;
    this.global = global;
  }
  get name() {
    return `${RateLimitError.name}[${this.route}]`;
  }
};
__name(RateLimitError, "RateLimitError");

// src/lib/RequestManager.ts
var import_node_events = require("events");
var import_node_http = require("http");
var import_node_https = require("https");
var import_collection = __toESM(require("@discordjs/collection"));
var import_snowflake = require("@sapphire/snowflake");
var import_form_data = __toESM(require("form-data"));

// src/lib/handlers/SequentialHandler.ts
var import_promises = require("timers/promises");
var import_async_queue = require("@sapphire/async-queue");
var import_node_fetch = __toESM(require("node-fetch"));

// src/lib/utils/utils.ts
function serializeSearchParam(value) {
  switch (typeof value) {
    case "string":
      return value;
    case "number":
    case "bigint":
    case "boolean":
      return value.toString();
    case "object":
      if (value === null)
        return null;
      if (value instanceof Date) {
        return Number.isNaN(value.getTime()) ? null : value.toISOString();
      }
      if (typeof value.toString === "function" && value.toString !== Object.prototype.toString)
        return value.toString();
      return null;
    default:
      return null;
  }
}
__name(serializeSearchParam, "serializeSearchParam");
function makeURLSearchParams(options) {
  const params = new URLSearchParams();
  if (!options)
    return params;
  for (const [key, value] of Object.entries(options)) {
    const serialized = serializeSearchParam(value);
    if (serialized !== null)
      params.append(key, serialized);
  }
  return params;
}
__name(makeURLSearchParams, "makeURLSearchParams");
function parseResponse(res) {
  if (res.headers.get("Content-Type")?.startsWith("application/json")) {
    return res.json();
  }
  return res.arrayBuffer();
}
__name(parseResponse, "parseResponse");
function hasSublimit(bucketRoute, body, method) {
  if (bucketRoute === "/channels/:id") {
    if (typeof body !== "object" || body === null)
      return false;
    if (method !== "patch" /* Patch */)
      return false;
    const castedBody = body;
    return ["name", "topic"].some((key) => Reflect.has(castedBody, key));
  }
  return true;
}
__name(hasSublimit, "hasSublimit");

// src/lib/handlers/SequentialHandler.ts
var invalidCount = 0;
var invalidCountResetTime = null;
var _asyncQueue, _sublimitedQueue, _sublimitPromise, _shiftSublimit;
var SequentialHandler = class {
  constructor(manager, hash, majorParameter) {
    this.manager = manager;
    this.hash = hash;
    this.majorParameter = majorParameter;
    __publicField(this, "id");
    __publicField(this, "reset", -1);
    __publicField(this, "remaining", 1);
    __publicField(this, "limit", Infinity);
    __privateAdd(this, _asyncQueue, new import_async_queue.AsyncQueue());
    __privateAdd(this, _sublimitedQueue, null);
    __privateAdd(this, _sublimitPromise, null);
    __privateAdd(this, _shiftSublimit, false);
    this.id = `${hash}:${majorParameter}`;
  }
  get inactive() {
    return __privateGet(this, _asyncQueue).remaining === 0 && (__privateGet(this, _sublimitedQueue) === null || __privateGet(this, _sublimitedQueue).remaining === 0) && !this.limited;
  }
  get globalLimited() {
    return this.manager.globalRemaining <= 0 && Date.now() < this.manager.globalReset;
  }
  get localLimited() {
    return this.remaining <= 0 && Date.now() < this.reset;
  }
  get limited() {
    return this.globalLimited || this.localLimited;
  }
  get timeToReset() {
    return this.reset + this.manager.options.offset - Date.now();
  }
  debug(message) {
    this.manager.emit("restDebug" /* Debug */, `[REST ${this.id}] ${message}`);
  }
  async globalDelayFor(time) {
    await (0, import_promises.setTimeout)(time, void 0, { ref: false });
    this.manager.globalDelay = null;
  }
  async onRateLimit(rateLimitData) {
    const { options } = this.manager;
    if (!options.rejectOnRateLimit)
      return;
    const shouldThrow = typeof options.rejectOnRateLimit === "function" ? await options.rejectOnRateLimit(rateLimitData) : options.rejectOnRateLimit.some((route) => rateLimitData.route.startsWith(route.toLowerCase()));
    if (shouldThrow) {
      throw new RateLimitError(rateLimitData);
    }
  }
  async queueRequest(routeId, url, options, requestData) {
    let queue = __privateGet(this, _asyncQueue);
    let queueType = 0 /* Standard */;
    if (__privateGet(this, _sublimitedQueue) && hasSublimit(routeId.bucketRoute, requestData.body, options.method)) {
      queue = __privateGet(this, _sublimitedQueue);
      queueType = 1 /* Sublimit */;
    }
    await queue.wait();
    if (queueType === 0 /* Standard */) {
      if (__privateGet(this, _sublimitedQueue) && hasSublimit(routeId.bucketRoute, requestData.body, options.method)) {
        queue = __privateGet(this, _sublimitedQueue);
        const wait = queue.wait();
        __privateGet(this, _asyncQueue).shift();
        await wait;
      } else if (__privateGet(this, _sublimitPromise)) {
        await __privateGet(this, _sublimitPromise).promise;
      }
    }
    try {
      return await this.runRequest(routeId, url, options, requestData);
    } finally {
      queue.shift();
      if (__privateGet(this, _shiftSublimit)) {
        __privateSet(this, _shiftSublimit, false);
        __privateGet(this, _sublimitedQueue)?.shift();
      }
      if (__privateGet(this, _sublimitedQueue)?.remaining === 0) {
        __privateGet(this, _sublimitPromise)?.resolve();
        __privateSet(this, _sublimitedQueue, null);
      }
    }
  }
  async runRequest(routeId, url, options, requestData, retries = 0) {
    while (this.limited) {
      const isGlobal = this.globalLimited;
      let limit2;
      let timeout2;
      let delay;
      if (isGlobal) {
        limit2 = this.manager.options.globalRequestsPerSecond;
        timeout2 = this.manager.globalReset + this.manager.options.offset - Date.now();
        if (!this.manager.globalDelay) {
          this.manager.globalDelay = this.globalDelayFor(timeout2);
        }
        delay = this.manager.globalDelay;
      } else {
        limit2 = this.limit;
        timeout2 = this.timeToReset;
        delay = (0, import_promises.setTimeout)(timeout2);
      }
      const rateLimitData = {
        timeToReset: timeout2,
        limit: limit2,
        method: options.method ?? "get",
        hash: this.hash,
        url,
        route: routeId.bucketRoute,
        majorParameter: this.majorParameter,
        global: isGlobal
      };
      this.manager.emit("rateLimited" /* RateLimited */, rateLimitData);
      await this.onRateLimit(rateLimitData);
      if (isGlobal) {
        this.debug(`Global rate limit hit, blocking all requests for ${timeout2}ms`);
      } else {
        this.debug(`Waiting ${timeout2}ms for rate limit to pass`);
      }
      await delay;
    }
    if (!this.manager.globalReset || this.manager.globalReset < Date.now()) {
      this.manager.globalReset = Date.now() + 1e3;
      this.manager.globalRemaining = this.manager.options.globalRequestsPerSecond;
    }
    this.manager.globalRemaining--;
    const method = options.method ?? "get";
    if (this.manager.listenerCount("request" /* Request */)) {
      this.manager.emit("request" /* Request */, {
        method,
        path: routeId.original,
        route: routeId.bucketRoute,
        options,
        data: requestData,
        retries
      });
    }
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), this.manager.options.timeout).unref();
    let res;
    try {
      res = await (0, import_node_fetch.default)(url, { ...options, signal: controller.signal });
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError" && retries !== this.manager.options.retries) {
        return await this.runRequest(routeId, url, options, requestData, ++retries);
      }
      throw error;
    } finally {
      clearTimeout(timeout);
    }
    if (this.manager.listenerCount("response" /* Response */)) {
      this.manager.emit("response" /* Response */, {
        method,
        path: routeId.original,
        route: routeId.bucketRoute,
        options,
        data: requestData,
        retries
      }, res.clone());
    }
    let retryAfter = 0;
    const limit = res.headers.get("X-RateLimit-Limit");
    const remaining = res.headers.get("X-RateLimit-Remaining");
    const reset = res.headers.get("X-RateLimit-Reset-After");
    const hash = res.headers.get("X-RateLimit-Bucket");
    const retry = res.headers.get("Retry-After");
    this.limit = limit ? Number(limit) : Infinity;
    this.remaining = remaining ? Number(remaining) : 1;
    this.reset = reset ? Number(reset) * 1e3 + Date.now() + this.manager.options.offset : Date.now();
    if (retry)
      retryAfter = Number(retry) * 1e3 + this.manager.options.offset;
    if (hash && hash !== this.hash) {
      this.debug(["Received bucket hash update", `  Old Hash  : ${this.hash}`, `  New Hash  : ${hash}`].join("\n"));
      this.manager.hashes.set(`${method}:${routeId.bucketRoute}`, { value: hash, lastAccess: Date.now() });
    } else if (hash) {
      const hashData = this.manager.hashes.get(`${method}:${routeId.bucketRoute}`);
      if (hashData) {
        hashData.lastAccess = Date.now();
      }
    }
    let sublimitTimeout = null;
    if (retryAfter > 0) {
      if (res.headers.get("X-RateLimit-Global")) {
        this.manager.globalRemaining = 0;
        this.manager.globalReset = Date.now() + retryAfter;
      } else if (!this.localLimited) {
        sublimitTimeout = retryAfter;
      }
    }
    if (res.status === 401 || res.status === 403 || res.status === 429) {
      if (!invalidCountResetTime || invalidCountResetTime < Date.now()) {
        invalidCountResetTime = Date.now() + 1e3 * 60 * 10;
        invalidCount = 0;
      }
      invalidCount++;
      const emitInvalid = this.manager.options.invalidRequestWarningInterval > 0 && invalidCount % this.manager.options.invalidRequestWarningInterval === 0;
      if (emitInvalid) {
        this.manager.emit("invalidRequestWarning" /* InvalidRequestWarning */, {
          count: invalidCount,
          remainingTime: invalidCountResetTime - Date.now()
        });
      }
    }
    if (res.ok) {
      return parseResponse(res);
    } else if (res.status === 429) {
      const isGlobal = this.globalLimited;
      let limit2;
      let timeout2;
      if (isGlobal) {
        limit2 = this.manager.options.globalRequestsPerSecond;
        timeout2 = this.manager.globalReset + this.manager.options.offset - Date.now();
      } else {
        limit2 = this.limit;
        timeout2 = this.timeToReset;
      }
      await this.onRateLimit({
        timeToReset: timeout2,
        limit: limit2,
        method,
        hash: this.hash,
        url,
        route: routeId.bucketRoute,
        majorParameter: this.majorParameter,
        global: isGlobal
      });
      this.debug([
        "Encountered unexpected 429 rate limit",
        `  Global         : ${isGlobal.toString()}`,
        `  Method         : ${method}`,
        `  URL            : ${url}`,
        `  Bucket         : ${routeId.bucketRoute}`,
        `  Major parameter: ${routeId.majorParameter}`,
        `  Hash           : ${this.hash}`,
        `  Limit          : ${limit2}`,
        `  Retry After    : ${retryAfter}ms`,
        `  Sublimit       : ${sublimitTimeout ? `${sublimitTimeout}ms` : "None"}`
      ].join("\n"));
      if (sublimitTimeout) {
        const firstSublimit = !__privateGet(this, _sublimitedQueue);
        if (firstSublimit) {
          __privateSet(this, _sublimitedQueue, new import_async_queue.AsyncQueue());
          void __privateGet(this, _sublimitedQueue).wait();
          __privateGet(this, _asyncQueue).shift();
        }
        __privateGet(this, _sublimitPromise)?.resolve();
        __privateSet(this, _sublimitPromise, null);
        await (0, import_promises.setTimeout)(sublimitTimeout, void 0, { ref: false });
        let resolve;
        const promise = new Promise((res2) => resolve = res2);
        __privateSet(this, _sublimitPromise, { promise, resolve });
        if (firstSublimit) {
          await __privateGet(this, _asyncQueue).wait();
          __privateSet(this, _shiftSublimit, true);
        }
      }
      return this.runRequest(routeId, url, options, requestData, retries);
    } else if (res.status >= 500 && res.status < 600) {
      if (retries !== this.manager.options.retries) {
        return this.runRequest(routeId, url, options, requestData, ++retries);
      }
      throw new HTTPError(res.statusText, res.constructor.name, res.status, method, url, requestData);
    } else {
      if (res.status >= 400 && res.status < 500) {
        if (res.status === 401 && requestData.auth) {
          this.manager.setToken(null);
        }
        const data = await parseResponse(res);
        throw new DiscordAPIError(data, "code" in data ? data.code : data.error, res.status, method, url, requestData);
      }
      return null;
    }
  }
};
__name(SequentialHandler, "SequentialHandler");
_asyncQueue = new WeakMap();
_sublimitedQueue = new WeakMap();
_sublimitPromise = new WeakMap();
_shiftSublimit = new WeakMap();

// src/lib/RequestManager.ts
var RequestMethod = /* @__PURE__ */ ((RequestMethod2) => {
  RequestMethod2["Delete"] = "delete";
  RequestMethod2["Get"] = "get";
  RequestMethod2["Patch"] = "patch";
  RequestMethod2["Post"] = "post";
  RequestMethod2["Put"] = "put";
  return RequestMethod2;
})(RequestMethod || {});
var _token;
var _RequestManager = class extends import_node_events.EventEmitter {
  constructor(options) {
    super();
    __publicField(this, "globalRemaining");
    __publicField(this, "globalDelay", null);
    __publicField(this, "globalReset", -1);
    __publicField(this, "hashes", new import_collection.default());
    __publicField(this, "handlers", new import_collection.default());
    __privateAdd(this, _token, null);
    __publicField(this, "hashTimer");
    __publicField(this, "handlerTimer");
    __publicField(this, "agent", null);
    __publicField(this, "options");
    this.options = { ...DefaultRestOptions, ...options };
    this.options.offset = Math.max(0, this.options.offset);
    this.globalRemaining = this.options.globalRequestsPerSecond;
    this.setupSweepers();
  }
  setupSweepers() {
    const validateMaxInterval = /* @__PURE__ */ __name((interval) => {
      if (interval > 144e5) {
        throw new Error("Cannot set an interval greater than 4 hours");
      }
    }, "validateMaxInterval");
    if (this.options.hashSweepInterval !== 0 && this.options.hashSweepInterval !== Infinity) {
      validateMaxInterval(this.options.hashSweepInterval);
      this.hashTimer = setInterval(() => {
        const sweptHashes = new import_collection.default();
        const currentDate = Date.now();
        this.hashes.sweep((v, k) => {
          if (v.lastAccess === -1)
            return false;
          const shouldSweep = Math.floor(currentDate - v.lastAccess) > this.options.hashLifetime;
          if (shouldSweep) {
            sweptHashes.set(k, v);
          }
          this.emit("restDebug" /* Debug */, `Hash ${v.value} for ${k} swept due to lifetime being exceeded`);
          return shouldSweep;
        });
        this.emit("hashSweep" /* HashSweep */, sweptHashes);
      }, this.options.hashSweepInterval).unref();
    }
    if (this.options.handlerSweepInterval !== 0 && this.options.handlerSweepInterval !== Infinity) {
      validateMaxInterval(this.options.handlerSweepInterval);
      this.handlerTimer = setInterval(() => {
        const sweptHandlers = new import_collection.default();
        this.handlers.sweep((v, k) => {
          const { inactive } = v;
          if (inactive) {
            sweptHandlers.set(k, v);
          }
          this.emit("restDebug" /* Debug */, `Handler ${v.id} for ${k} swept due to being inactive`);
          return inactive;
        });
        this.emit("handlerSweep" /* HandlerSweep */, sweptHandlers);
      }, this.options.handlerSweepInterval).unref();
    }
  }
  setToken(token) {
    __privateSet(this, _token, token);
    return this;
  }
  async queueRequest(request) {
    const routeId = _RequestManager.generateRouteData(request.fullRoute, request.method);
    const hash = this.hashes.get(`${request.method}:${routeId.bucketRoute}`) ?? {
      value: `Global(${request.method}:${routeId.bucketRoute})`,
      lastAccess: -1
    };
    const handler = this.handlers.get(`${hash.value}:${routeId.majorParameter}`) ?? this.createHandler(hash.value, routeId.majorParameter);
    const { url, fetchOptions } = this.resolveRequest(request);
    return handler.queueRequest(routeId, url, fetchOptions, {
      body: request.body,
      files: request.files,
      auth: request.auth !== false
    });
  }
  createHandler(hash, majorParameter) {
    const queue = new SequentialHandler(this, hash, majorParameter);
    this.handlers.set(queue.id, queue);
    return queue;
  }
  resolveRequest(request) {
    const { options } = this;
    this.agent ??= options.api.startsWith("https") ? new import_node_https.Agent({ ...options.agent, keepAlive: true }) : new import_node_http.Agent({ ...options.agent, keepAlive: true });
    let query = "";
    if (request.query) {
      const resolvedQuery = request.query.toString();
      if (resolvedQuery !== "") {
        query = `?${resolvedQuery}`;
      }
    }
    const headers = {
      ...this.options.headers,
      "User-Agent": `${DefaultUserAgent} ${options.userAgentAppendix}`.trim()
    };
    if (request.auth !== false) {
      if (!__privateGet(this, _token)) {
        throw new Error("Expected token to be set for this request, but none was present");
      }
      headers.Authorization = `${request.authPrefix ?? this.options.authPrefix} ${__privateGet(this, _token)}`;
    }
    if (request.reason?.length) {
      headers["X-Audit-Log-Reason"] = encodeURIComponent(request.reason);
    }
    const url = `${options.api}${request.versioned === false ? "" : `/v${options.version}`}${request.fullRoute}${query}`;
    let finalBody;
    let additionalHeaders = {};
    if (request.files?.length) {
      const formData = new import_form_data.default();
      for (const [index, file] of request.files.entries()) {
        formData.append(file.key ?? `files[${index}]`, file.data, file.name);
      }
      if (request.body != null) {
        if (request.appendToFormData) {
          for (const [key, value] of Object.entries(request.body)) {
            formData.append(key, value);
          }
        } else {
          formData.append("payload_json", JSON.stringify(request.body));
        }
      }
      finalBody = formData;
      additionalHeaders = formData.getHeaders();
    } else if (request.body != null) {
      if (request.passThroughBody) {
        finalBody = request.body;
      } else {
        finalBody = JSON.stringify(request.body);
        additionalHeaders = { "Content-Type": "application/json" };
      }
    }
    const fetchOptions = {
      agent: this.agent,
      body: finalBody,
      headers: { ...request.headers ?? {}, ...additionalHeaders, ...headers },
      method: request.method
    };
    return { url, fetchOptions };
  }
  clearHashSweeper() {
    clearInterval(this.hashTimer);
  }
  clearHandlerSweeper() {
    clearInterval(this.handlerTimer);
  }
  static generateRouteData(endpoint, method) {
    const majorIdMatch = /^\/(?:channels|guilds|webhooks)\/(\d{16,19})/.exec(endpoint);
    const majorId = majorIdMatch?.[1] ?? "global";
    const baseRoute = endpoint.replace(/\d{16,19}/g, ":id").replace(/\/reactions\/(.*)/, "/reactions/:reaction");
    let exceptions = "";
    if (method === "delete" /* Delete */ && baseRoute === "/channels/:id/messages/:id") {
      const id = /\d{16,19}$/.exec(endpoint)[0];
      const timestamp = import_snowflake.DiscordSnowflake.timestampFrom(id);
      if (Date.now() - timestamp > 1e3 * 60 * 60 * 24 * 14) {
        exceptions += "/Delete Old Message";
      }
    }
    return {
      majorParameter: majorId,
      bucketRoute: baseRoute + exceptions,
      original: endpoint
    };
  }
};
var RequestManager = _RequestManager;
__name(RequestManager, "RequestManager");
_token = new WeakMap();

// src/lib/REST.ts
var import_node_events2 = require("events");
var REST = class extends import_node_events2.EventEmitter {
  constructor(options = {}) {
    super();
    __publicField(this, "cdn");
    __publicField(this, "requestManager");
    this.cdn = new CDN(options.cdn ?? DefaultRestOptions.cdn);
    this.requestManager = new RequestManager(options).on("restDebug" /* Debug */, this.emit.bind(this, "restDebug" /* Debug */)).on("rateLimited" /* RateLimited */, this.emit.bind(this, "rateLimited" /* RateLimited */)).on("invalidRequestWarning" /* InvalidRequestWarning */, this.emit.bind(this, "invalidRequestWarning" /* InvalidRequestWarning */)).on("hashSweep" /* HashSweep */, this.emit.bind(this, "hashSweep" /* HashSweep */));
    this.on("newListener", (name, listener) => {
      if (name === "request" /* Request */ || name === "response" /* Response */)
        this.requestManager.on(name, listener);
    });
    this.on("removeListener", (name, listener) => {
      if (name === "request" /* Request */ || name === "response" /* Response */)
        this.requestManager.off(name, listener);
    });
  }
  setToken(token) {
    this.requestManager.setToken(token);
    return this;
  }
  get(fullRoute, options = {}) {
    return this.request({ ...options, fullRoute, method: "get" /* Get */ });
  }
  delete(fullRoute, options = {}) {
    return this.request({ ...options, fullRoute, method: "delete" /* Delete */ });
  }
  post(fullRoute, options = {}) {
    return this.request({ ...options, fullRoute, method: "post" /* Post */ });
  }
  put(fullRoute, options = {}) {
    return this.request({ ...options, fullRoute, method: "put" /* Put */ });
  }
  patch(fullRoute, options = {}) {
    return this.request({ ...options, fullRoute, method: "patch" /* Patch */ });
  }
  request(options) {
    return this.requestManager.queueRequest(options);
  }
};
__name(REST, "REST");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ALLOWED_EXTENSIONS,
  ALLOWED_SIZES,
  ALLOWED_STICKER_EXTENSIONS,
  CDN,
  DefaultRestOptions,
  DefaultUserAgent,
  DiscordAPIError,
  HTTPError,
  REST,
  RESTEvents,
  RateLimitError,
  RequestManager,
  RequestMethod,
  makeURLSearchParams
});
//# sourceMappingURL=index.js.map
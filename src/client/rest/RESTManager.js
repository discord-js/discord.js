const UserAgentManager = require('./UserAgentManager');
const handlers = require('./handlers');
const APIRequest = require('./APIRequest');
const routeBuilder = require('./APIRouter');
const { Error } = require('../../errors');

class RESTManager {
  constructor(client) {
    this.client = client;
    this.handlers = {};
    this.userAgentManager = new UserAgentManager(this);
    this.rateLimitedEndpoints = {};
    this.globallyRateLimited = false;
  }

  get api() {
    return routeBuilder(this);
  }

  destroy() {
    for (const handlerID in this.handlers) {
      this.handlers[handlerID].destroy();
    }
  }

  push(handler, apiRequest) {
    return new Promise((resolve, reject) => {
      handler.push({
        request: apiRequest,
        resolve,
        reject,
      });
    });
  }

  getRequestHandler() {
    const handler = handlers[this.client.options.apiRequestMethod];
    if (!handler) throw new Error('RATELIMIT_INVALID_METHOD');
    return handler;
  }

  request(method, url, options = {}) {
    const apiRequest = new APIRequest(this, method, url, options);
    if (!this.handlers[apiRequest.route]) {
      this.handlers[apiRequest.route] = new handlers.RequestHandler(this, this.getRequestHandler());
    }

    return this.push(this.handlers[apiRequest.route], apiRequest);
  }
}

module.exports = RESTManager;

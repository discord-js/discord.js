const noop = () => {}; // eslint-disable-line no-empty-function
const methods = ['get', 'post', 'delete', 'patch', 'put'];
const reflectors = [
  'toString', 'valueOf', 'inspect', 'constructor',
  Symbol.toPrimitive, Symbol.for('util.inspect.custom'),
];

function buildRoute(manager) {
  const route = [''];
  const handler = {
    get(target, name) {
      if (reflectors.includes(name)) return () => route.join('/');
      if (methods.includes(name)) {
        // Preserve async stack
        const stackTrace = {};
        Error.captureStackTrace(stackTrace, this.get);

        return options => manager.request(name, route.join('/'), Object.assign({
          versioned: manager.versioned,
          route: route.map((r, i) => {
            if (/\d{16,19}/g.test(r)) return /channels|guilds/.test(route[i - 1]) ? r : ':id';
            return r;
          }).join('/'),
        }, options)).catch(error => {
          stackTrace.message = error.message;
          error.stack = `${error.constructor.name}:${stackTrace.stack.substring(6)}`;
          throw error;
        });
      }
      route.push(name);
      return new Proxy(noop, handler);
    },
    apply(target, _, args) {
      route.push(...args.filter(x => x != null)); // eslint-disable-line eqeqeq
      return new Proxy(noop, handler);
    },
  };
  return new Proxy(noop, handler);
}

module.exports = buildRoute;

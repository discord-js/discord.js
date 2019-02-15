'use strict';

const libs = {
  'libsodium-wrappers': sodium => ({
    open: sodium.crypto_secretbox_open_easy,
    close: sodium.crypto_secretbox_easy,
    random: n => sodium.randombytes_buf(n),
  }),
  tweetnacl: tweetnacl => ({
    open: tweetnacl.secretbox.open,
    close: tweetnacl.secretbox,
    random: n => tweetnacl.randomBytes(n),
  }),
};

exports.methods = {};

(async () => {
  for (const libName of Object.keys(libs)) {
    try {
      const lib = require(libName);
      if (libName === 'libsodium-wrappers' && lib.ready) await lib.ready; // eslint-disable-line no-await-in-loop
      exports.methods = libs[libName](lib);
      break;
    } catch (err) {} // eslint-disable-line no-empty
  }
})();

const superagent = require('superagent');
const botGateway = require('./Constants').Endpoints.botGateway;

/**
 * Gets the recommended shard count from Discord
 * @param {number} token Discord auth token
 * @returns {Promise<number>} the recommended number of shards
 */
module.exports = token => new Promise((resolve, reject) => {
  if (!token) reject(new Error('You must provide a token!'));
  superagent.get(botGateway)
  .set('Authorization', `Bot ${token.replace('Bot ', '')}`)
  .end((err, res) => {
    if (err) reject(err);
    resolve(res.body.shards);
  });
});

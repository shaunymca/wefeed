var pg = require('pg'),
    Q = require('q');

pg.defaults.poolIdleTimeout = 12000000;
pg.defaults.poolSize = 20;
var conString = "postgres://shaun:gsemtart@fantasy.cwaxcaqtuuuv.us-west-2.rds.amazonaws.com/fantasy";


exports.create_user = function(user) {
  pg.connect(conString, function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
  }

  console.log(user.username + user.photos[0].value,  user.id);
    client.query('Insert into wefeed.users (username, photourl, created_at, modified_at, twitter_id) VALUES($1,$2,$3,$4,$5)',
    [user.username, user.photos[0].value, new Date(), new Date(), user.id], function(err, result) {
      //call `done()` to release the client back to the pool
      done();

      if(err) {
        return console.error('error running query', err);
      }
    });
  });
}

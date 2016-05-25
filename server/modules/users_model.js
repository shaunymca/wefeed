var pg = require('pg'),
    Q = require('q');

pg.defaults.poolIdleTimeout = 12000000;
pg.defaults.poolSize = 20;
var conString = process.env.databaseString;

exports.create_user = function(user) {
  return Q.Promise(function(resolve) {
  //console.log(user);
    pg.connect(conString, function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
    }

      client.query("WITH ins AS (INSERT INTO wefeed.users (username, photourl, created_at, modified_at, twitter_id, twitter_token, twitter_secret) VALUES ($1,$2,$3,$4,$5,$6,$7) ON CONFLICT (twitter_id) DO NOTHING RETURNING id) SELECT id FROM ins UNION ALL SELECT id FROM wefeed.users WHERE twitter_id = $5 LIMIT  1;",
      [user.profile.username, user.profile.photos[0].value, new Date(), new Date(), user.profile.id, user.token, user.tokenSecret], function(err, result) {
        //call `done()` to release the client back to the pool
        if (result.rows[0].id) {
          var data = {exists:true, id : result.rows[0].id }
          resolve(data)
        }
        else if (result.rows[0]) {
          resolve(result.rows[0].row.split('(')[1].split(')')[0].split(','));
        }
        done();
        if(err) {
          return console.error('error running query', err);
        }
      });
    });
  });
}

exports.findUserProfile = function(userId) {
  return Q.promise(function(resolve) {
    pg.connect(conString, function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      client.query('SELECT id, username, photourl FROM wefeed.users where id = $1;',[userId], function(err, result) {
        resolve(result.rows);
        //call `done()` to release the client back to the pool
        done();

        if(err) {
          return console.error('error running query', err);
        }
      });
    })
  })
}

exports.getTwitterDetails = function() {
  return Q.Promise(function(resolve) {
    pg.connect(conString, function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      client.query('SELECT id, twitter_token, twitter_secret FROM wefeed.users where twitter_token is not null', function(err, result) {
        resolve(result.rows);
        //call `done()` to release the client back to the pool
        done();

        if(err) {
          return console.error('error running query', err);
        }
      });
    })
 })
}

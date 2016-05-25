var pg = require('pg'),
    Q = require('q');
    pg = require('pg'),
    Q = require('q');

pg.defaults.poolIdleTimeout = 12000000;
pg.defaults.poolSize = 20;
var conString = process.env.databaseString;

exports.addArticle = function(article, user){
  return Q.Promise(function(resolve) {
  //console.log(user.id);
    pg.connect(conString, function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
    }
      client.query('Insert into wefeed.articles (user_id, url, created_at, modified_at, title, content, author, primaryimg, site_name) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) ON CONFLICT (url) DO NOTHING RETURNING (id)',
      [user.id, article.url, new Date(), new Date(), article.title, article.content, article.author, article.images[0].url, article.provider_name], function(err, result) {
        //call `done()` to release the client back to the pool
        //console.log(result);
        if (result) {
          resolve(result.rows)
        } else {
          resolve('exists');}
        done();
        if(err) {
          return console.error('error running query', err);
        }
      });
    });
  });
}

exports.addRepost = function(articleId, userId, twitterId){
  return Q.Promise(function(resolve) {
  //console.log(user.id);
  console.log(articleId, userId, twitterId);
    pg.connect(conString, function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
    }
      client.query('Insert into wefeed.reposts (user_id, article_id, twitter_id, is_deleted, created_at) VALUES($1,$2,$3,$4,$5) RETURNING (id, user_id, article_id, twitter_id)',
      [userId, articleId, twitterId, false, new Date()], function(err, result) {
        //call `done()` to release the client back to the pool
        //console.log(result);
        if (result) {
          resolve(result.rows);//console.log(result.rows[0]);
        } else {
          resolve('exists');}
        done();
        if(err) {
          return console.error('error running query', err);
        }
      });
    });
  });
}

exports.getUserPosts = function(userId){
  return Q.Promise(function(resolve) {
  //console.log(user.id);
  console.log(userId);
    pg.connect(conString, function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
    }
      client.query('SELECT distinct(a.id), a.user_id, a.primaryimg, a.author, a.title, a.content, a.site_name, max(b.id) as repost_id, max(b.created_at) as recent_activity FROM wefeed.articles a INNER JOIN wefeed.reposts b ON a.id = article_id where a.user_id = $1 and a.is_deleted = false and b.is_deleted=false group by a.id order by recent_activity LIMIT 1000', [userId]
      , function(err, result) {
        //call `done()` to release the client back to the pool
        //console.log(result);
        if (result) {
          resolve(result.rows);
        } else {
          resolve(null);}
        done();
        if(err) {
          return console.error('error running query', err);
        }
      });
    });
  });
}

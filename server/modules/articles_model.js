
var pg = require('pg'),
    Q = require('q');
    pg = require('pg'),
    Q = require('q'),
    thumbd = require('./thumbnailer.js');

pg.defaults.poolIdleTimeout = 12000000;
pg.defaults.poolSize = 50;
var conString = process.env.databaseString;

exports.addArticle = function(article, user){
  return Q.Promise(function(resolve) {
  //console.log(user.id);
  // thumb(options, callback);
    pg.connect(conString, function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
    }
      client.query('Insert into wefeed.articles (user_id, url, created_at, modified_at, title, content, author, site_name) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) ON CONFLICT (url) DO NOTHING RETURNING (id)',
      [user.id, article.url, new Date(), new Date(), article.title, article.content, article.author, article.provider_name], function(err, result) {
        //call `done()` to release the client back to the pool
        if (result) {
          resizeImages(result.rows[0].primaryimg, result[0].id)
          .then(article => { resolve(article)})
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

resizeImages = function(url, articleId){
  return Q.Promise(function(resolve) {
    console.log(url, articleId);
    thumbd.thumbd(url, articleId);
    pg.connect(conString, function(err, client, donee) {
      if(err) {
        return console.error('error fetching client from pool', err);
    }
    client.query('UPDATE wefeed.articles SET primaryimg = $1 where id = $2', ["https://s3-us-west-2.amazonaws.com/wefeed-thumb/thumbs/" + articleId + "_tn.jpg",articleId], function(err, primresult) {
      if (primresult) {
        console.log(primresult);
        resolve(primresult.rows)
      } else {
        resolve('exists')}
      });
      donee();
    });
  });
}

exports.addRepost = function(articleId, userId, twitterId){
  return Q.Promise(function(resolve) {
  //console.log(user.id);
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
  var async = require('async');
  return Q.Promise(function(resolve) {
  //console.log(user.id);
    pg.connect(conString, function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
    }
      client.query('SELECT distinct(a.id), a.user_id, a.primaryimg, a.author, a.title, a.content, a.site_name, max(b.id) as repost_id, max(b.created_at) as recent_activity FROM wefeed.articles a INNER JOIN wefeed.reposts b ON a.id = article_id where a.user_id = $1 and a.is_deleted = false and b.is_deleted=false group by a.id order by recent_activity desc', [userId]
      , function(err, result) {
        //call `done()` to release the client back to the pool
        //console.log(result);
        if (result) {
          done();
          resolve(result.rows);
        }
      });
    });
  });
}

var pg = require('pg'),
    Q = require('q');
    pg = require('pg'),
    Q = require('q');

pg.defaults.poolIdleTimeout = 12000000;
pg.defaults.poolSize = 20;
var conString = process.env.databaseString;

exports.addArticle = function(article, user){
  return Q.Promise(function(resolve) {
  console.log(user.id);
    pg.connect(conString, function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
    }
      client.query('Insert into wefeed.articles (user_id, url, created_at, modified_at, title, content, author, primaryimg, site_name) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) ON CONFLICT (url) DO NOTHING RETURNING (id)',
      [user.id, article.url, new Date(), new Date(), article.title, article.html, article.author, article.thumbnail, article.site_name], function(err, result) {
        //call `done()` to release the client back to the pool
        //console.log(result);
        if (result) {
          console.log(result.rows[0]);
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

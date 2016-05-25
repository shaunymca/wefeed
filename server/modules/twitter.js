var Twitter = require('twitter'),
    users = require('./users_model.js'),
    async = require('async'),
    parser = require('./articleparse.js'),
    Q = require('q'),
    articles_model = require('./articles_model.js');

var self = module.exports = {
  init : function() {
    users.getTwitterDetails()
    .then (function(users) {
      async.each(users, self.stream, function(err){
        console.log(err);
      })
    })
  },

  stream : function(user) {
    console.log('adding streamer' + user.id);
    var twitterClient = new Twitter({
      consumer_key: process.env.consumerKey,
      consumer_secret: process.env.consumerSecret,
      access_token_key: user.twitter_token,
      access_token_secret: user.twitter_secret
    });
    // FOR TESTING change the track field to something that is trending on twitter.
    //twitterClient.stream('statuses/filter', {track: 'State Dept'}, function(stream) {
    // for Prod
    twitterClient.stream('user',  function(stream) {
      stream.on('data', function(tweet) {
        var text = tweet.text;
        if (tweet.retweeted_status) {
          text = tweet.retweeted_status.text;
          return
        }
        parser.identifyUrl(text)
        .then(function(url){
          if (url) {
            parser.parse(url)
            .then(function(data) {
              //console.log(data);
              if (data) {
                articles_model.addArticle(data, user)
                .then(function(rows) {
                  console.log(rows);
                  //console.log(rows[0].id, user.id);
                  articles_model.addRepost(rows[0].id, user.id,tweet.user.id)
                });
              }
            })
          }
        });
      });

      stream.on('error', function(error) {
        throw error;
      });
    });


  }
}

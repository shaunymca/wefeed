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
    // FOR TESTING
    twitterClient.stream('statuses/filter', {track: '#GoogleSummit'}, function(stream) {
    // for Prod
    //twitterClient.stream('user',  function(stream) {
      stream.on('data', function(tweet) {
        var text = tweet.text;
        if (tweet.retweeted_status) {
          text = tweet.retweeted_status.text;
        }
        parser.identifyUrl(text)
        .then(function(url){
          if (url) {
            parser.parse(url)
            .then(function(data) {
              //console.log(data);
              articles_model.addArticle(data, user)
              .then(function(rows) {
                console.log(rows);
              });

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

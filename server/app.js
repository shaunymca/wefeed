
/**
 * Module dependencies
 */

var express = require('express'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  morgan = require('morgan'),
  cookieParser = require('cookie-parser'),
  methodOverride = require('method-override'),
  errorHandler = require('errorhandler'),
  http = require('http'),
  path = require('path'),
  passport = require('passport'),
  bodyParser = require('body-parser'),
  TwitterStrategy = require('passport-twitter').Strategy,
  userModel = require('./modules/users_model.js'),
  twitterStream = require('./modules/twitter.js'),
  dotenv = require('dotenv'),
  Q = require('q'),
  articleModel = require('./modules/articles_model.js');

//dotenv.load();
//  console.log(process.env);

var app = module.exports = express();

/**
 * Configuration
 */

 app.set('views', __dirname + '/views');
 app.set('view engine', 'ejs');
 // all environments
 app.set('port', process.env.PORT || 8080);
 app.use(morgan('combined'));
 app.use(cookieParser());
 app.use(bodyParser());
 app.use(methodOverride());
 app.use(session({ secret: 'JW5ufqyIcg5KMvYjvhi4eTdUj8Oop8qB' }));
 app.use(passport.initialize());
 app.use(passport.session());
 // Initialize Passport!  Also use passport.session() middleware, to support
 // persistent login sessions (recommended).


// all environments
app.set('port', process.env.PORT || 3000);
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

var env = process.env.NODE_ENV || 'development';

passport.serializeUser(function(user, done) {
  //console.log(user);
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  //console.log(user);
  done(null, user);
});

passport.use(new TwitterStrategy({
    consumerKey: process.env.consumerKey,
    consumerSecret: process.env.consumerSecret,
    callbackURL: "http://127.0.0.1:3000/auth/twitter/callback",
    userAuthorizationURL: 'https://api.twitter.com/oauth/authorize'
  },
  function(token, tokenSecret, profile, cb) {
    var user = [];
    user.token = token;
    user.tokenSecret = tokenSecret;
    user.profile = profile;
    user.authorized = true;
    userModel.create_user(user)
    .then (function(row) {
      var user = {};
      if (row.exists == false) {
        user = {id:row[0], twitter_token:row[1], twitter_secret:row[2]};
        twitterStream.stream(user)
      } else {
        user = row;
      }
      return cb(null, user);
    });
  }
));

// API Routes
app.get('/auth/twitter',
  passport.authenticate('twitter'));

app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: 'http://127.0.0.1:8100/#/start' }), function(req, res) {
  res.redirect('http://127.0.0.1:8100/#/app/posts');
  // Successful authentication, redirect home.
  //console.log('Request and Response');
  //console.log(req);
});

app.get('/api/profile', function(req, res) {
  if (req.user) {
    userModel.findUserProfile(req.user.id)
    .then(function(user){
      res.json(user);
    })
  } else {
    res.redirect('http://127.0.0.1:8100/#/start');
  }
});

app.get('/api/posts', function(req, res) {
  articleModel.getUserPosts(req.user.id)
  .then(function(rows){
    res.json(rows);
  })
})
// development only
// if (env === 'development') {
//   app.use(express.errorHandler());
// }

// production only
if (env === 'production') {
  // TODO
}


/**
 * Routes
 */

app.get('/', function(req, res) {
  res.sendfile(__dirname + "/public/js/partials/index.html");
});

app.post('/create')
/**
 * Start Server
 */
twitterStream.init();
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

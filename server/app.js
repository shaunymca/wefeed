
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
  userModel = require('./modules/users_model.js');


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
    consumerKey: "9KC44mKTaQKNaFhONdEtUOMID",
    consumerSecret: "z6DjPZWU1fVARuzrXhcU8lqwkVMF6SVnOT64SKZWf9THox25Q5",
    callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
  },
  function(token, tokenSecret, profile, cb) {
    //console.log('token : ' + token);
    //console.log('tokenSecret : '  + tokenSecret);
    //console.log(profile);
    var user = profile
    return cb(null, user);
  }
));

// API Routes
app.get('/auth/twitter',
  passport.authenticate('twitter'));

app.get('/auth/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: 'http://127.0.0.1:8100/#/start' }),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log('Request and Response');
    //console.log(req);
    //console.log(req.user);
    userModel.create_user(req.user);

    res.redirect('http://127.0.0.1:8100/#/app/posts');
  });

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

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

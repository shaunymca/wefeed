// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova','auth0',
  'angular-storage',
  'angular-jwt'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.constant('api', '')
.config(function($stateProvider, $urlRouterProvider, authProvider, $httpProvider,
  jwtInterceptorProvider) {
  $stateProvider
    .state('login', { // Notice: this state name matches the loginState property value to set in authProvider.init({...}) below...
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl',
    })
    .state('app', {
    url: '/app',
    abstract: false,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl',
    data: {
      requiresLogin:true
    }
  })

  .state('app.posts', {
    url: '/posts',
    views: {
      'menuContent': {
        templateUrl: 'templates/posts.html',
        controller: 'PostsCtrl',
        data: {
          requiresLogin:true
        }
      }
    }
  })

  .state('app.post', {
    url: '/post/:postId',
    views: {
      'menuContent': {
        templateUrl: 'templates/post.html',
        controller: 'PostsCtrl',
        data: {
          requiresLogin:true
        }
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

  authProvider.init({
    domain: 'wefeed.auth0.com',
    clientID: 'iUze9Avx35TCTZJt78OE3SjuL0IpX6kU',
    loginState: 'login' // This is the name of the state where you'll show the login, which is defined above...
  });
})

.run(function(auth) {
  // This hooks all auth events to check everything as soon as the app starts
  auth.hookEvents();
});

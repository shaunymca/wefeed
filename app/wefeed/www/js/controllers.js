angular.module('starter.controllers', [])

.controller('AppCtrl', function(store, $scope, $ionicModal, $timeout, auth, $location) {
  $scope.profile = store.get('profile')
  $scope.logout = function() {
    console.log('log out');
    auth.signout();
    store.remove('profile');
    store.remove('token');
    $location.path('/login');
  }
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
})

.controller('PostsCtrl', function(store, $scope, $http, api, $state, $sce, $ionicBackdrop) {
  $scope.profile = store.get('profile')
  var config = {headers:  {
        'userId': $scope.profile.databaseId
      }
  }
  $http.get(api + "/api/posts", config).success(function(result) {
    console.log(result);
    $scope.posts = result
    for (var i = 0; i < $scope.posts.length; i++) {
      $scope.posts[i].content = $scope.posts[i].content.replace(/<img/g,'<img class="full-image"')
      console.log(i);
      $scope.apply;
    }
    $ionicBackdrop.release()

  })
  $scope.postId = $state.params.postId;
  $scope.doRefresh = function() {
    $http.get(api + "/api/posts", config).success(function(result) {
      console.log(result);
      $scope.posts = result
    })
   .finally(function() {
     // Stop the ion-refresher from spinning
     $scope.$broadcast('scroll.refreshComplete');
   });
  };
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('LoginCtrl', function(store, $scope, $location, auth, $http, api, $ionicBackdrop, $rootScope) {
  $scope.login = function() {
    $ionicBackdrop.retain();
    auth.signin({
      authParams: {
        scope: 'openid offline_access',
        device: 'Mobile device'
      }
    }, function(profile, token, accessToken, $state, refreshToken) {
      // Success callback
      $http.post(api + "/api/user", profile).success(function(result) {
        //console.log(result);
        profile.databaseId = result;
        store.set('profile', profile);
        store.set('token', token);
        store.set('refreshToken', refreshToken);
        profile.refreshToken = refreshToken;
        profile.token = token;
        $scope.profile = profile;
        $location.path('/app/posts');
        //$state = 'app.posts';
      });
    }, function() {
      // Error callback
    });
  }
})

.controller('StartCtrl', function($scope, $state, $stateParams, $http, $cordovaDevice) {
  document.addEventListener("deviceready", function () {

    var device = $cordovaDevice.getDevice();

    var cordova = $cordovaDevice.getCordova();

    var model = $cordovaDevice.getModel();

    var platform = $cordovaDevice.getPlatform();

    var uuid = $cordovaDevice.getUUID();
    //console.log('test');
    console.log(uuid);
    $scope.uuid = uuid;
    var version = $cordovaDevice.getVersion();

  }, false);
})

.filter('html', function($sce) {
  return function(val) {
    return $sce.trustAsHtml(val);
  };
});

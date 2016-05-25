angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http, api) {
  var profile = api + "/api/profile";
  console.log(profile);
  $http.get(profile).success(function(result) {
    console.log(result);
    $scope.profile = result
  });
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
})

.controller('PostsCtrl', function($scope, $http, api) {
  $http.get(api + "/api/posts").success(function(result) {
    console.log(result);
    $scope.posts = result

  });
  // this will come from the backend eventually
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
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
});

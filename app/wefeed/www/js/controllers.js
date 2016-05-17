angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
})

.controller('PostsCtrl', function($scope) {
  // this will come from the backend eventually
  $scope.posts = [
    {image : "https://cdn3.vox-cdn.com/thumbor/ksRFJ97w2mS-uufZovectlfZq7Y=/0x84:500x417/400x267/filters:format(webp)/cdn0.vox-cdn.com/uploads/chorus_image/image/49610873/Imageresizer.0.jpeg",
    title : 'A new piece of hardware',
    author : 'Frank the Tank'
  },
  {image : "https://cdn0.vox-cdn.com/thumbor/EBBUz90lFC8QmSvM7nIHwcY3Myc=/42x0:915x873/350x350/filters:format(webp)/cdn0.vox-cdn.com/uploads/chorus_image/image/49609907/Apple-lightning-2014-09-23-verge-1020.0.0.jpg",
  title : 'This is a title of a thing',
  author : 'Zapp Brannigan'
  },
  {image : "https://cdn1.vox-cdn.com/thumbor/JjV5r3XJKee_zIzlpNSwlPeolJA=/799x0:3279x2480/350x350/filters:format(webp)/cdn0.vox-cdn.com/uploads/chorus_image/image/49609569/GIC_BMWi8Futurism_frontA_12.0.0.jpg",
  title : '5 ways to live doctors hate him',
  author : 'Glenn Coco'
  },
  {image : "https://cdn0.vox-cdn.com/thumbor/-3CEtOGLLRcbRH41CuNrbcceEA8=/99x0:1179x720/180x120/filters:format(webp)/cdn0.vox-cdn.com/uploads/chorus_image/image/49580495/VRG_VRS_003_Kindle_Oasis_Thumb.0.0.jpg",
  title : 'Craft is good food',
  author : 'Arthur the Ardvark'
  },
  {image : "https://cdn1.vox-cdn.com/thumbor/BiAotBxEZzHBPQsIlUuIYaVRuhQ=/0x0:1619x1079/180x120/filters:format(webp)/cdn0.vox-cdn.com/uploads/chorus_image/image/49511969/VRG_TEC_010_SYNTEC_DRAFT_SYSTEM.0.0.jpg",
  title : 'Different strokes for same folks?',
  author : 'Vishnu'
  }

  ]
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
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
    console.log('test');
    console.log(uuid);
    $scope.uuid = uuid;
    var version = $cordovaDevice.getVersion();

  }, false);
});

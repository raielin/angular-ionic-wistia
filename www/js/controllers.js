angular.module('starter.controllers', [])

.controller('VideoCtrl', function($scope, $window) {
  $window._wq = $window._wq || [];
  $window._wq.push({ id: "5bbw8l7kl5", onReady: function(video) {
    console.log("I got a handle to the video using Wistia's onReady method!", video.uuid);
  }});
})
.controller('HomeCtrl', function($scope) {


});


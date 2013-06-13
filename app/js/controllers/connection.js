'use strict';

function ConnectionCtrl($scope) {
  var ws = new WebSocket("ws://localhost:8080");
  ws.onopen = function () {
    $scope.$apply(function () {
      console.log("open");
      $scope.state = "open";
    });
  }

  ws.onclose = function (err) {
    $scope.$apply(function () {
      console.log("close");
      $scope.state = "close";
    });
  }

  ws.onerror = function (err) {
    $scope.$apply(function () {
      console.log("error");
      $scope.state = "error";
    });
  }
}

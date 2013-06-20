'use strict';

function WorkspaceCtrl($scope, WorkspaceService) {
  $scope.tree = WorkspaceService.query(function (response) {
    $scope.tree = response
  });

  $scope.addFolder = function () {
    WorkspaceService.get({id:'hello'}, function (response) {
      console.log(response);
      console.log(response.name);
      $scope.tree.push( {name: response.name} );
    });
  }

  $scope.addFile = function () {
    console.log('addFile');
  }
}

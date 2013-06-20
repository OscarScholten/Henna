'use strict';

function WorkspaceCtrl($scope, WorkspaceService) {
  var internalTree = {};
  var currentSelection = {};

  UpdateTree();
  $scope.addFileDisabled = true;
  $scope.addFolderDisabled = true;

  function UpdateTree() {
    WorkspaceService.query(function (response) {
      internalTree = response;
      $scope.tree = internalTree;
    });
  }

  $scope.addFolder = function () {
    WorkspaceService.get({id: 'hello'}, function (response) {
      console.log(response);
      console.log(response.name);
      $scope.tree.push({name: response.name});
    });
  }

  $scope.addFile = function () {
    console.log('addFile');
  }

  $scope.setSelection = function (item) {
    console.log('selected: ' + item.name);

    if (currentSelection !== undefined) {
      currentSelection.selected = false;
    }

    if (item.type === 'folder' || item.type === 'file') {
      $scope.addFileDisabled = false;
      $scope.addFolderDisabled = false;
    } else {
      $scope.addFileDisabled = true;
      $scope.addFolderDisabled = true;
    }

    item.selected = true;
    currentSelection = item;
  }
}

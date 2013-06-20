'use strict';

var module = angular.module('WorkspaceServiceModule', ['ngResource']);
module.factory('WorkspaceService', function ($resource) {

  return $resource('http://localhost\\:8080/rest/content/:id', {}, {
    query: {method:'GET', isArray:true}
  });
});

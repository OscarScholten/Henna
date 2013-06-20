'use strict';

angular.module('RestTestFilters', []).filter('typeToIcon', function() {
  return function(type) {
    return type === 'folder' ? 'icon-folder-open' : 'icon-file';
  };
});

'use strict';

var mod = angular.module('RestTestFilters', []);

mod.filter('typeToIcon', function() {
  return function(type) {
    return type === 'folder' ? 'icon-folder-open' : 'icon-file';
  };
});

mod.filter('selectedToActive', function() {
  return function(selected) {
    return selected === true ? 'active' : '';
  };
});

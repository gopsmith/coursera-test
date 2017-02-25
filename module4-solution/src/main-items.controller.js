(function () {
'use strict';

angular.module('MenuApp')
.controller('MainItemsController', MainItemsController);

// 'item' is injected through state's resolve
MainItemsController.$inject = ['items']
function MainItemsController(items) {
  var itemList = this;
  itemList.items = items;
}

})();

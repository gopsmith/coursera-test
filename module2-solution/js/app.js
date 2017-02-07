(function() {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list = this;
  list.toBuyItems = ShoppingListCheckOffService.getToBuyItems();
  list.buyItem = ShoppingListCheckOffService.buyItem;
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list = this;
  list.alreadyBoughtItems = ShoppingListCheckOffService.getAlreadyBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [
    {name: "cookies", quantity: 8},
    {name: "chips", quantity: 2},
    {name: "salsa", quantity: 1},
    {name: "guacamole", quantity: 2},
    {name: "Fresca", quantity: 4},
  ];
  var alreadyBoughtItems = [];

  service.buyItem = function(index) {
    var item = toBuyItems[index];
    toBuyItems.splice(index, 1);
    alreadyBoughtItems.push(item);
  }

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtItems;
  };
}

})();

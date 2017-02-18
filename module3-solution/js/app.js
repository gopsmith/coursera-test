(function() {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");  // /menu_items.json

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'narr',
    bindToController: true
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narro = this;
  narro.searchText = "";
  narro.found = [];

  narro.getMatchedMenuItems = function (searchText) {
    if (searchText === "") {
      narro.found = [];
      return;
    }

    var promise = MenuSearchService.getMatchedMenuItems(searchText);
    promise.then(function (result) {
      narro.found = result;
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  narro.removeItem = function (itemIndex) {
    MenuSearchService.removeItem(itemIndex)
  }
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  //list of found items
  var foundItems = [];

  service.getMatchedMenuItems = function(searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    })
    .then(function (response) {
        // process response and only keep items that match
        foundItems = [];  //wipe clean and start over on each search!
        var items = response.data.menu_items;
        for (var i = 0; i < items.length; i++) {
          if (items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
            foundItems.push(items[i]);
          }
        }
        return foundItems;
    });
  }

  service.removeItem = function (itemIndex) {
    foundItems.splice(itemIndex, 1);
  };
}

})();

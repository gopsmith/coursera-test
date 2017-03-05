(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService'];
function SignupController(MenuService) {
  var $ctrl = this;
  $ctrl.error = false;

  $ctrl.submit = function () {
    $ctrl.saved = false;
    $ctrl.validateMenuItem($ctrl.itemCode)
    .then(function(menuItem) {
      if (!$ctrl.error) {
        var userPrefs = {
          'firstname': $ctrl.firstname,
          'lastname': $ctrl.lastname,
          'email': $ctrl.email,
          'phone': $ctrl.phone,
          'menuItem': menuItem
        };
        MenuService.saveUserPreferences(userPrefs);
        //console.log (MenuService.getUserPreferences());
        $ctrl.saved = true;
      }
    });
  };

  $ctrl.validateMenuItem = function(itemCode) {
    return MenuService.getMenuItem(itemCode.toUpperCase())
    .then(function(menuItem) {
      $ctrl.error = false;
      return menuItem;
    })
    .catch(function(errorResponse) {
      $ctrl.error = true;
    });
  };

}

})();

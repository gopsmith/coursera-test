(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService'];
function SignupController(MenuService) {
  var $ctrl = this;
  $ctrl.error = false;

  $ctrl.submit = function () {
    $ctrl.error = false;
    $ctrl.saved = false;

    var itemPromise = MenuService.getMenuItem($ctrl.itemCode.toUpperCase());

    itemPromise.then(function(menuItem) {
      console.log ("menuItem = ", menuItem);
      var userPrefs = {
        'firstname': $ctrl.firstname,
        'lastname': $ctrl.lastname,
        'email': $ctrl.email,
        'phone': $ctrl.phone,
        'menuItem': menuItem
      };
      MenuService.saveUserPreferences(userPrefs);
      console.log (MenuService.savedPreferences)
      $ctrl.saved = true;
    })
    .catch(function(errorResponse) {
      $ctrl.error = true;
    });
  }

}

})();

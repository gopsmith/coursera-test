(function () {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['MenuService', 'ApiPath'];
function UserInfoController(MenuService, ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
  $ctrl.userPrefs = MenuService.getUserPreferences();
}

})();

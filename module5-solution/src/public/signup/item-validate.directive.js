(function () {
'use strict';

angular.module('public')
.directive('itemValidate', ItemValidate);

function ItemValidate() {
  //console.log ('in ItemValidate!');
  return {
    require: 'ngModel',
    link: function(scope, element, attr, mCtrl) {
      //console.log ('scope = ', scope)
      //console.log ('controller = ', mCtrl)
      function myValidation(value) {
        //console.log ('value = ', value);
        scope.signupCtrl.validateMenuItem(value)
        .then(function() {
          if (!scope.signupCtrl.error) {
            mCtrl.$setValidity('menuItem', true);
          } else {
            mCtrl.$setValidity('menuItem', false);
          }
        });
        return value;
      }
      mCtrl.$parsers.push(myValidation);
    }
  };
}

})();

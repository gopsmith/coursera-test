(function () {
  'user strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope', '$filter'];
  function LunchCheckController($scope, $filter) {
    $scope.lunchItems = "";
    $scope.message = "";
    $scope.messageFeedback= "";
    $scope.inputFeedback = "";

    $scope.checkIfTooMuch = function() {
      if ($scope.lunchItems == "") {
        $scope.message = "Please enter data first"
        $scope.messageFeedback= "bad-text"
        $scope.inputFeedback = "bad-border"
      }
      else {
        var numItems = $scope.lunchItems
          .split(",")
          .filter( function(val) {return val.trim() != ""} )
          .length;
        $scope.message = (numItems <=3 ? "Enjoy!" : "Too much!");
        $scope.messageFeedback = "good-text"
        $scope.inputFeedback = "good-border"
      }
    }
  }
})();

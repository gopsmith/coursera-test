(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://gps-coursera-angular.herokuapp.com')
.config(config);

//if I comment out this last section, then the first Jasmine test works fine:
config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();

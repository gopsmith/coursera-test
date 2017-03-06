describe('getMenuItem', function () {

  var menuService;
  var $httpBackend;
  var ApiPath;

  beforeEach(function () {
    module('common'
    //this was an attempt to inject $httpProvider another way. it didn't cause any errors in itself
      , function (_$httpProvider_) {
        //save our interceptor
        $httpProvider = _$httpProvider_;
      }
    );

    inject(function ($injector) {
      // this first $injector call, uncommented, causes the following error:
      // http://errors.angularjs.org/1.5.8/$injector/unpr?p0=loadingHttpInterceptorProvider%20%3C-%20loadingHttpInterceptor%20%3C-%20%24http%20%3C-%20MenuService
      menuService = $injector.get('MenuService');
      $httpBackend = $injector.get('$httpBackend');
      ApiPath = $injector.get('ApiPath');
      // none of these work, they all cause errors:
      // $http = $injector.get('$http');
      // loadingHttpInterceptor = $injector.get('loadingHttpInterceptor');
      // loadingHttpInterceptorProvider = $injector.get('loadingHttpInterceptorProvider');
      // $rootScope = $injector.get('$rootScope');
      // $q = $injector.get('$q');
    });
  });

  it('should return categories list', function() {
    expect(1).toEqual(1);   //just trying to get the $injector calls working, first...
    // $httpBackend.whenGET(ApiPath + '/categories.json').respond(['Lunch', 'Dessert']);
    // menuService.getCategories().then(function(data) {
    //   expect(data).toEqual(['Lunch', 'Dessert']);
    // });
    // $httpBackend.flush();
  });
  //
  // it('should return a valid menu item', function() {
  //   var itemCode = 'A1';
  //   $httpBackend.whenGET(ApiPath + '/menu_items/' + itemCode + '.json').respond(['Lunch', 'Dessert']);
  //   menuService.getMenuItem(itemCode).then(function(response) {
  //     expect(response.data).toEqual(['Lunch', 'Dessert']);
  //   });
  //   $httpBackend.flush();
  // });

});

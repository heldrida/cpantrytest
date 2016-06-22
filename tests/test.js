describe('The FetchData service', function() {

   var mainCtrl, dataFetcher, $httpBackend, $rootScope, createController, authRequestHandler;

  beforeEach(angular.mock.module("myApp"))

  beforeEach(inject(function(_dataFetcher_, _$httpBackend_) {
    dataFetcher = _dataFetcher_;
    $httpBackend = _$httpBackend_;

    $httpBackend
      .when('GET', 'https://api.citypantry.com/packages/1')
      .respond({
        success: true
      });
  }));

   afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

  it('should fetch data', function () {
    dataFetcher.getPackageByHumanId(1);

     $httpBackend.flush();
   });

});


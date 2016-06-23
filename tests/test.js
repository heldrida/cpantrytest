describe('The FetchData service', function() {

   var mainCtrl, dataFetcher, $httpBackend, $rootScope, createController, authRequestHandler;
   var fooRes = {
		success: true
	};

  beforeEach(angular.mock.module("myApp"))

  beforeEach(inject(function(_dataFetcher_, _$httpBackend_) {

    dataFetcher = _dataFetcher_;
    $httpBackend = _$httpBackend_;

    $httpBackend
      .when('GET', 'https://api.citypantry.com/packages/2140')
      .respond(fooRes);

  }));

   afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

  it('should fetch data', function () {

	dataFetcher.getPackageByHumanId(2140).then(function (res) {
		expect(res.success).toBe(fooRes.success);
	});

	$httpBackend.flush();

   });

});


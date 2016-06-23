describe('The FetchData service', function() {

	var dataFetcher, $httpBackend;

	beforeEach(angular.mock.module("myApp"));

	beforeEach(inject(function(_dataFetcher_, _$httpBackend_) {
		dataFetcher = _dataFetcher_;
		$httpBackend = _$httpBackend_;
	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	it('should fetch data', function () {

		var status, data,
			pid = 2140,
			api = 'https://api.citypantry.com/packages';

		function successHandler(res){
			status = 'success';
			data = res.data;
			expect(res.success).toEqual(true);
		}

		function errorHandler(){
			status = 'error'
		}

		$httpBackend
		 .when('GET', api + '/' + pid)
		 .respond({ success: true });

		$httpBackend
		 .when('GET', api + '/' + pid)
		 .respond(500, 'An error has occured.');

		dataFetcher.getPackageByHumanId(pid).then(successHandler, errorHandler);

		$httpBackend.flush();

		expect(status).toEqual('success');

	});

});
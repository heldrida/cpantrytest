describe('The FetchData service', function() {

  var dataFetcher;

  beforeEach(angular.mock.module("myApp"))

  beforeEach(inject(function(_dataFetcher_) {
    dataFetcher = _dataFetcher_;
  }));

  it('should fetch data', function(done) {

    var testData = function(res) {
      expect(res.success).toBe(true);
    };

    var failTest = function(error) {
      expect(error).toBeUndefined();
    };

    dataFetcher.getPackageByHumanId(2104)
      .then(testData)
      .catch(failTest);

  });
});
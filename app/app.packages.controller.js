module.exports = function ($scope, dataFetcher) {

	$scope.packages = [];

    var promises = dataFetcher.getAll();
    promises.then(function (res) {
    	_.forEach(res, function (v) {
	    	$scope.packages.push(v.data.package);
    	});
    	console.log("$scope.packages", $scope.packages);
    });

};
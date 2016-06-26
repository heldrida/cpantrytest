module.exports = function ($scope, dataFetcher) {

	$scope.packages = [];

    dataFetcher.getPackageByHumanId(2104).then(list);

    function list(res) {
    	console.log('res', res);
    	$scope.packages.push(res.package);
    }

};
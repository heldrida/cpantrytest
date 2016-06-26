module.exports = function ($scope, dataFetcher) {

	$scope.packages = [];

    dataFetcher.getAll().then(list);

    function list(res) {
    	console.log('res', res);
    	$scope.packages.push(res.package);
    }

};
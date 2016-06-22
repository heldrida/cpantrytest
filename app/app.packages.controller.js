module.exports = myApp.controller('packagesCtrl', ['$scope', 'dataFetcher', function($scope, dataFetcher) {

	console.log("packagesCtrl loaded!");

    dataFetcher.getPackageByHumanId(2104).then(function (data) {
    	console.log('data', data);
    });

}]);
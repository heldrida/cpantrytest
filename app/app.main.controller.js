module.exports = function ($scope, dataFetcher) {
    dataFetcher.getPackageByHumanId(2104).then(function (data) {
    	console.log('data', data);
    });
};
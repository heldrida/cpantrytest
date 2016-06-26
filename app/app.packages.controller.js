module.exports = function ($scope, dataFetcher) {

	console.log("packagesCtrl loaded!");

    dataFetcher.getPackageByHumanId(2104).then(list);

    function list(data) {
    	console.log('fooooo');
    	console.log('data', data);
    }

};
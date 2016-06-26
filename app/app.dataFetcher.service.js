var _ = require('lodash');

module.exports = function($http, $q) {

	var packageList = {};

	function reqPackageById(humanId) {

		var p = $http.get('https://api.citypantry.com/packages/' + humanId);

		p.then(function (res) {
			var id = res.data.package.humanId;
			if (packageList[id] !== 'undefined') {
				packageList[id] = res.data.package;
			}
		});

		return p;
	}

	function getAll($http, $q) {

		var packages = [2104, 913, 6595, 4767];
		var promises = [];
		
		_.forEach(packages, function(v) {

			var promise = reqPackageById(v);
			promises.push(promise);

		});

		return promises;

	};

	function getPackageById (humanId) {
		var p = {};
		if (packageList[humanId] !== 'undefined') {
			p = packageList[humanId];
		}
		return p;
	}

	return {
		getPackageByHumanId: function(humanId) {

			var promises = getAll($http, $q);

			return $q.all(promises).then(function (res) {
				return getPackageById(humanId);
			});

		}
	}

};
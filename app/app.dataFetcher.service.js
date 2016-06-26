var _ = require('lodash');

module.exports = function($http, $q) {

	var packageList = {};

	function reqPackageById(humanId) {

		var p = $http
					.get('https://api.citypantry.com/packages/' + humanId)
					.error(function (data, status, headers, config) {
						console.log(status);
					});

		p.then(function (res) {
			var id = res.data.package.humanId;
			if (packageList[id] !== 'undefined') {
				packageList[id] = res.data.package;
			}
		});

		return p;
	}

	function getAll($http, $q) {

		var packages = require('./data/packages.js');
		var promises = [];

		_.forEach(packages, function(v) {

			var promise = reqPackageById(v);
			promises.push(promise);

		});

		return $q.all(promises);

	};

	function getPackageById (humanId) {
		var p = {};
		if (packageList[humanId] !== 'undefined') {
			p = packageList[humanId];
		}
		return p;
	}

	return {
		getAll: function () {
			return getAll($http, $q);
		},

		getPackageByHumanId: function(humanId) {

			var promises = getAll($http, $q);

			return promises.then(function (res) {
				return getPackageById(humanId);
			});

		}
	}

};
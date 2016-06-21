var angular = require('angular');
var ngMock = require('angular-mocks');

var myApp = angular.module('myApp', []);

myApp.controller('helloWorldController', function($scope, dataFetcher) {

	console.log('hello world!!!!');

    $scope.msg = '';

    $scope.sayHello = function() {
        $scope.msg = 'Hello World!';
    };

    dataFetcher.getPackageByHumanId(2104).then(function (data) {
    	console.log('data', data);
    });

});

myApp.factory('dataFetcher', function($http) {
   return {
        getPackageByHumanId: function(humanId) {
             return $http.get('https://api.citypantry.com/packages/' + humanId)
                       .then(function(result) {
                            return result.data;
                        });
        }
   }
});
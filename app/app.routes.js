module.exports = function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('/', {
        url: '',
        templateUrl: 'start.html'
    })
    .state('packages', {
        url: '/packages',
        templateUrl: 'list-packages.html',
        controller: 'mainCtrl'
    })
    .state('package-info', {
        url: '/package-info',
        templateUrl: 'package-info.html'
    });

};
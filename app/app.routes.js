var packagesCtrl = require('./app.packages.controller.js');

module.exports = function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('/', {
        url: '',
        templateUrl: 'start.html'
    })
    .state('packages', {
        url: '/packages',
        templateUrl: 'list-packages.html',
        controller: packagesCtrl
    })
    .state('packages.info', {
        url: '/info/:id',
        templateUrl: 'package-info.html'
    });

};
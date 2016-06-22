var angular = require('angular');
var ngMock = require('angular-mocks');
var mainCtrl = require('./app.main.controller.js');
var dataFetcher = require('./app.dataFetcher.service.js');

var myApp = angular.module('myApp', []);

myApp.controller('mainCtrl', mainCtrl);
myApp.factory('dataFetcher', dataFetcher);
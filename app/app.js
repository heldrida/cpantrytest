var angular = require('angular');
var ngMock = require('angular-mocks');
var uiRouter = require('angular-ui-router');
var routes = require('./app.routes.js');
var dataFetcher = require('./app.dataFetcher.service.js');

var myApp = angular.module('myApp', [uiRouter]);

myApp.config(routes);
myApp.factory('dataFetcher', dataFetcher);
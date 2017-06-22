'use strict';

/**
 * @ngdoc overview
 * @name csetWebApp
 * @description
 * # csetWebApp
 *
 * Main module of the application.
 */
angular
  .module('csetWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'ngCookies'
	//'highcharts-ng'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
	  .when('/login', {
        templateUrl: 'views/login.html'
      })
      .when('/registration', {
        templateUrl: 'views/registration.html'
      })
	  .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });

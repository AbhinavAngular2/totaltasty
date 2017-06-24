'use strict';
angular
  .module('totalTastyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'ngCookies',
	'ngMaterial'
  ])
  .config(function ($routeProvider) {	  
    $routeProvider
      .when('/preorder/menuList', {
        templateUrl: 'preorder/views/totalTasty.menuList.html',
        controller: 'totalTasty.menuListCtrl'
      })
      .otherwise({
        redirectTo: '/preorder/menuList'
      });
  });

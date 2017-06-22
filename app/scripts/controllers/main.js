'use strict';

/**
 * @ngdoc function
 * @name csetWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the csetWebApp
 */
angular.module('csetWebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

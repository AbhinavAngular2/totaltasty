'use strict';

/**
 * @ngdoc function
 * @name csetWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the csetWebApp
 */
angular.module('csetWebApp')
  .controller('LoginCtrl', function ($location,$scope,authentication,Base64,setName) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
		$scope.login = false;
	$scope.login = function(){
		    $scope.decodePass = Base64.encode($scope.loginPassword);
			$scope.result = authentication.login($scope.loginUsername, $scope.decodePass);
			$scope.resultText = ($scope.result === true) ? 'Login is successful' : 'Incorrect username or password';
			$scope.register = false;
			$scope.login = true;
		setName.setterLen($scope.loginUsername);
			$location.path('/contact');
		};
		$scope.fClick=function(){
			console.log('hi abhinav');
		};
		$scope.eClick=function(){
			console.log('hi email');
		};
		
  });

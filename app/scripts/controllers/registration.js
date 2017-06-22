'use strict';

/**
 * @ngdoc function
 * @name csetWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the csetWebApp
 */
angular.module('csetWebApp')
  .controller('RegistrationCtrl', function ($scope,authentication,Base64,stateStore) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	$scope.register = false;
	//user registration form
	$scope.userIndex=stateStore.getData();
	console.log($scope.userIndex);
	$scope.register = function(){
		if($scope.userIndex===0){
			console.log('0 abhinav');
		}
		else if($scope.userIndex===1){
			console.log('1 abhinav');
		}
		else if($scope.userIndex===2){
			console.log('2 abhinav');
		}
		$scope.authdata = Base64.encode($scope.regPassword);
			$scope.result = authentication.register($scope.regUsername, $scope.authdata);
			$scope.resultText = ($scope.result === true) ? 'Registration successful' : 'Username ' + $scope.regUsername + ' is already in use';
			//$scope.login = false;
			$scope.register = true;
			
		};
  });

'use strict';

angular.module('totalTastyApp')
  .controller('totalTasty.menuListCtrl', function ($scope,totalTastvendorData) {
$scope.name="Abhinv";
 $scope.items=[{
	 title: 'Developer1',
 },{
	title: 'Developer2', 
 },{
	 title: 'Developer3',
 }];
$scope.user = {
      title: 'Developer',
    };
	$scope.loadData = function() {
            totalTastvendorData.getMenuList()
                .then(function successCallback(result) {
                    	$scope.Data1=result;			
                }, function failureCallback(response) {

                });
        }
		$scope.loadData();
  });

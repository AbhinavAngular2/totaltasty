'use strict';
angular.module('totalTastyApp')
  .factory('totalTastvendorData',[ '$http','$q',function ($http,$q) {
	  var totalTastvendorData = {};	
      totalTastvendorData.getMenuList=function(){
		 var defer = $q.defer();
			$http.get('https://api.github.com/users/peterbe/gists')
			.then(function(response) {
			  defer.resolve(response.data);
			}, function(response) {
			  defer.reject(response);
			});
			return defer.promise;
	   }    
      return totalTastvendorData;
  }]);
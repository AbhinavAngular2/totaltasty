'use strict';

/**
 * @ngdoc AboutCtrl
 * @name csetWebApp.controller:AboutCtrl
 * @description
 * AboutCtrl for about page 
 */
angular.module('csetWebApp')
.factory('stateStore', function() {
 var statename;
 return {
    setData: function(state) {
      statename=state;
    },
    getData: function() {
      return statename;
    }
  };
})
.service('authentication',function($rootScope,stateStore) {
  // set up the credentials in the local storage
	this.register = function(username, password){
		//localStorage.users = "";
		var currentUser0;var currentUser1;var currentUser2;
		if(stateStore.getData()===0){
			console.log('0 abhinav');
			 currentUser0 = {
			username: username,
			password:password
		};
		}
		else if(stateStore.getData()===1){
			
			 currentUser1 = {
			username: username,
			password:password
		};
		console.log('1 abhinav' + currentUser1);
		}
		else if(stateStore.getData()===2){
			console.log('2 abhinav');
			 currentUser2 = {
			username: username,
			password:password
		};
		}
		var users = [];		
		var userExists = false;
		var currentUser = {
			username: username,
			password:password
		};		
		// get the current list of users
		if(!localStorage.users){
            localStorage.users = JSON.stringify([]);
        }
		users = JSON.parse(localStorage.users);		
		// check if the username already exists
		angular.forEach(users, function(user){
			if(userExists === false){
				if(user.username === currentUser.username){
					// don't allow the user to register
					userExists = true;
				}
			}
		});
		if(userExists === true){
			return false;
		}
		else{
			users.push(currentUser);			
			// add this as well to local storage
			localStorage.users = JSON.stringify(users);
			console.log(users);
			$rootScope.userData=users;
			return true;
			
		}
	};
	// validate against credentials in local storage
	this.login = function(username, password){	
		var userLoginSuccessful = false;
		var currentUser = {
			username: username,
			password: password
		};
		console.log('service login'+currentUser);
		var users = [];
		users = JSON.parse(localStorage.users);		
		angular.forEach(users, function(user){
			if(userLoginSuccessful === false){
				if(angular.equals(user, currentUser) === true){
					userLoginSuccessful = true;
				}
			}
		});
		return userLoginSuccessful;
	};
});
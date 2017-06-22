'use strict';

/**
 * @ngdoc function
 * @name csetWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the csetWebApp
 */
angular.module('csetWebApp')
.factory('myData', function() {
    var theValue = {};
    theValue.setter = function(newValue) {
        theValue.value = newValue;
    };
    theValue.getter = function() {
        return theValue.value;
    };
     return theValue;
})
.factory('dataLen', function() {
    var theValue = {};
    theValue.setterLen = function(newValue) {
        theValue.value = newValue;
    };
    theValue.getterLen = function() {
        return theValue.value;
    };
    return theValue;
})
.factory('setName', function() {
    var Value = {};
    Value.setterLen = function(newValue) {
        Value.value = newValue;
    };
    Value.getterLen = function() {
        return Value.value;
    };
    return Value;
});

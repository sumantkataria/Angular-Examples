"use strict";

var mainApp = angular.module("mainApp",[]);

mainApp.controller("mainController",function(){

});
//InterpolateProvider is used to change the {{ symbol and replace with nay user provided sybmol like in this example (~
mainApp.config(function($interpolateProvider){
	$interpolateProvider.startSymbol('(~');
	$interpolateProvider.endSymbol('~)');
});
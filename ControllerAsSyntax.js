"use strict";

var mainApp = angular.module("mainApp",[]);

mainApp.controller("mainController",function(){
	this.message = "Hello Sumant";
	
	this.user={
		firstName:"Sumant",
		lastName:"Kataria",
		company:"Cognizant",
		location:"Pune"
	};
});

mainApp.filter("capitalize",function(){
	return function(x){
			return x.toUpperCase();
	};
});
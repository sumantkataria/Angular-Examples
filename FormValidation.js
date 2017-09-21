"use strict";

var mainApp = angular.module("mainApp",[]);

mainApp.controller("mainController",function(){
	this.user = {
		
	};
	
	this.submitForm = function(form){
		if(form.$valid){
			window.alert("Passed");
		} else {
			window.alert("Failed");
		}
	}
});
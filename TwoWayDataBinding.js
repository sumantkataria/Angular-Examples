"use strict";

var mainApp = angular.module("mainApp",[]);

mainApp.controller("mainController",function(){
	this.fruitList = ["banana","cherry","apple"];
	
	this.user={
		name: "Sumant Kataria",
		favoriteFruit: "Apple",
		isActive: true
	}
});

mainApp.filter("YesOrNo",function(){
	return function(value){
		if(value == true){
			return 'yes';
		}else if(value == false){
			return 'no';
		}else{
			return 'unknown';
		}
	};
});
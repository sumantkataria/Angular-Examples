"use strict";

var mainApp = angular.module("mainApp",[]);

mainApp.controller("mainController",function($scope,$interval){
	console.log("Hello Sumant");
	$scope.message = "Helloooooooooooo";
	$scope.sayHello = function(name){
		return $scope.message +" "+ name;
	};
	
	
	var items = ['audi', 'mercedes', 'bmw', 'maruti', 'volkswagen', 'renault', 'suzuki'];
	$scope.itemIndex = null;
	$scope.currentItem = '';
	
	$scope.getItem = function(){
		$scope.currentItem = items[$scope.itemIndex];
	};
	$scope.randomValue = -999;
	$interval(function(){
		$scope.randomValue = Math.round(Math.random()*1000000);
	},2000);
});
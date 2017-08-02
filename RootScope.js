//Javascript file
var mainApp = angular.module("mainApp",[]);

mainApp.controller("mainController", function($rootScope,$scope){
	$scope.message = "Hello";
	$rootScope.message = "Bye";
});
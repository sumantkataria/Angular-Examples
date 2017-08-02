var mainApp = angular.module("mainApp",[]);

mainApp.controller("mainController",function($scope,$location){
	$scope.myURL = $location.absUrl();
 
});
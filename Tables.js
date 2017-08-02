var mainApp = angular.module("mainApp",[]);


mainApp.controller("mainController",function($scope){
	$scope.students = [
	{name:"sumant", class:"first",marks:"20"},
	{name:"sanjay", class:"second",marks:"50"},
	{name:"shashank", class:"fourth",marks:"40"},
	{name:"jayesh", class:"third",marks:"70"}
	];
	$scope.orderByMe = function(x){
		$scope.myOrder = x;
	};
});

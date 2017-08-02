var mainApp = angular.module("mainApp",[]);

mainApp.controller("mainController",function($scope){

$scope.students=[
{name:'Sumant', age:'24', marks:'70'},
{name:'Upender', age:'28', marks:'75'},
{name:'Praveen', age:'26', marks:'80'}
		];
$scope.orderByMe = function(x){
	$scope.myOrderBy = x;
}
});
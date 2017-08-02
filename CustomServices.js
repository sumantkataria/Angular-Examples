var mainApp = angular.module("mainApp",[]);


mainApp.controller("mainController",function($scope,squareFunction){
	$scope.squareThing = squareFunction.myFunction(num);
 
});

mainApp.service('squareFunction',function(){
	this.myFunction = function(x)
	{
		return x*x;
	}
});
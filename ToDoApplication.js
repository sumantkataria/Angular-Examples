var mainApp = angular.module("mainApp",[]);


mainApp.controller("mainController",function($scope){
	var arr=[];
	$scope.submit = function(){
		if($scope.toDoTasks.length > 0)
		{
			arr.push($scope.toDoTasks);
			alert("array---"+arr);
			alert("Value entered---"+$scope.toDoTasks);
			$scope.toDoTasks = '';
		}
		else{
			//alert("Please enter a value");
			$scope.toDoTasks.$error = "Enter value";
		}
	};
});

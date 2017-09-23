var mainApp = angular.module("mainApp",[]);


mainApp.controller("mainController",function($scope){
	var languages = [
	{name:"Angular",likes:0,dislikes:0},
	{name:"React",likes:0,dislikes:0},
	{name:"ExtJS",likes:0,dislikes:0},
	{name:"jQuery",likes:0,dislikes:0},
	];
	$scope.languages = languages;
	
	$scope.inclike = function(language){
		language.likes++;
	};
	
	$scope.declike = function(language){
		language.dislikes++;
	}
});

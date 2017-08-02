//Javascript file
var mainApp = angular.module("mainApp",[]);

mainApp.directive("myCustomDirective", function(){
	return {
		restrict : "M",
		template : "<h1>This is a Custom directive</h1>"
	};
});
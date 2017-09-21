var mainApp = angular.module('mainApp', []);

mainApp.controller('mainController', function($scope, $http) {
  $http.get("customer.php").then(function (response) {
      $scope.myData = response.data.records;
  });
});
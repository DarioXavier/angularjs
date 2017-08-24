angular.module('sumadorMdl').controller('controlador', myCtrl);

myCtrl.$inject = ['$scope'];

function myCtrl($scope){

$scope.msg = "hola mundo";

}
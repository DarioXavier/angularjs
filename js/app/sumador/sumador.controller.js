/*angular.module('sumadorMdl').controller('controlador', function($scope){
    $scope.sms = 'Hola mundo';
    $scope.num1 = 0;
    $scope.num2 = 0;
    $scope.resp = 0;

    $scope.sumar = function() {
        $scope.resp = $scope.num1 + $scope.num2;
    }
});*/

(function() {
    'use strict';

    angular
        .module('sumadorMdl')
        .controller('controlador', controlador);

        controlador.$inject = ['$scope'];
    function controlador($scope) {
        scope.sms = 'Hola mundo';
        $scope.num1 = 0;
        $scope.num2 = 0;
        $scope.resp = 0;
    
        $scope.sumar = function() {
            $scope.resp = $scope.num1 + $scope.num2;
        }
    }
})();
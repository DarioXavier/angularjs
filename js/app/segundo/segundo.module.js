(function() {
    'use strict';

    angular
        .module('segundoCtrlMdl', [
            
        ])
        .config(segundoCnfg);

        segundoCnfg.$inject = ['$routeProvider'];

        function segundoCnfg($routeProvider) {
            $routeProvider

            .when('/ruta3', {
                templateUrl: 'js/app/segundo/segundo.html',
                controller: 'segundoController',
                controllerAs: 'ctrl2'
            })
            .when('/ruta4/:num', {
                templateUrl: 'js/app/segundo/segundo.html',
                controller: 'segundoController',
                controllerAs: 'ctrl2'
            })
        }
})();
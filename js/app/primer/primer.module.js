(function() {
    'use strict';

    angular
        .module('primerCtrlMdl', [
            
        ])
        .config(primerCnfg);

        primerCnfg.$inject = ['$routeProvider'];

        function primerCnfg($routeProvider){
            $routeProvider
            
            .when('/ruta2', {
                templateUrl: 'js/app/primer/primer.html', 
                controller: 'primerController',
                controllerAs: 'ctrl1'
            })
        }
})();
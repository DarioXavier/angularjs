(function(){
    'use strict';

    angular
        .module('myApp')
        .config(myConfig);

        myConfig.$inject = ['$routeProvider'];

        function myConfig($routeProvider){
            $routeProvider
            .when('/', {
                template: '<h2>Hola Mundo Inicio</h2>'
            })
            .when('/ruta1', {
                template: '<h2>Hola Mundo Ruta </h2> template'
            })
            .when('/ruta2', {
                templateUrl: 'js/app/primero/primero.html', 
                controller: 'primerController',
                controllerAs: 'ctrl1'
            })
            .when('/ruta3', {
                templateUrl: 'js/app/segundo/segundo.html',
                controller: 'segundoController',
                controllerAs: 'ctrl2'
            })
            .when('/ruta3/:num', {
                templateUrl: 'js/app/segundo/segundo.html',
                controller: 'segundoController',
                controllerAs: 'ctrl2'
            })
            .otherwise('#!/')
        }

}());

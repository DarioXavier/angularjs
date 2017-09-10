(function(){
    'use strict';

    angular
        .module('myApp')
        .config(myConfig);

        myConfig.$inject = ['$routeProvider'];

        function myConfig($routeProvider){
            $routeProvider
            .when('/', {
                template: '<div><h3>Hola Mundo Inicio</h3></div>'
            })
            .when('/ruta1', {
                template: '<div><h3>Hola Mundo Ruta 1</h3> template</div>'
            })/*
            .when('/ruta2', {
                templateUrl: 'js/app/primer/primer.html', 
                controller: 'primerController',
                controllerAs: 'ctrl1'
            })
            .when('/ruta3', {
                templateUrl: 'js/app/segundo/segundo.html',
                controller: 'segundoController',
                controllerAs: 'ctrl2'
            })
            .when('/ruta4/:num', {
                templateUrl: 'js/app/segundo/segundo.html',
                controller: 'segundoController',
                controllerAs: 'ctrl2'
            })*/
            .otherwise('#!/')
        }

}());

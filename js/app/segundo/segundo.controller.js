(function(){
    'use strict'

    angular
        .module('myApp')
        .controller('segundoController', segundoController)

        function segundoController($routeParams){
            var ctrl2 = this;

            console.log('Parametros: ', $routeParams);
            ctrl2.sms = "Hola ctrl2, parámetro: " + $routeParams.num;

            init();

            function init(){

            }

        }


}());
(function(){
    'use strict'

    angular
        .module('primerCtrlMdl') //myApp
        .controller('primerController', primerController)

        function primerController(){
            var ctrl1 = this;
            ctrl1.sms = "Hola ctrl1";

            init();

            function init(){

            }

        }

}());
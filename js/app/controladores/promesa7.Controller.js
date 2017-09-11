(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('promesa7Ctrl', promesa7Ctrl)

    function promesa7Ctrl($scope, $timeout) {

        init();
        
        function init($scope) {
            primer();
            comprobarPromise()
                .then(function(resp){
                    console.log('Primera resuelta', resp);
                });
        }

        function primer() {
            console.log('primer');                
        }

        function segundo() {
            var promesa = new Promise(function(resolve, reject) {
                $timeout(function(){
                    console.log('segundo');
                    resolve('Éxito: 2');
                }, 1504);  
            });
            return promesa;
        }

        function tercer() {
            var promesa = new Promise(function(resolve, reject) {
                $timeout(function(){
                    console.log('tercer');
                    resolve('Éxito: 3');
                }, 1503);  
            });
            return promesa;
        }

        function cuarto() {
            var promesa = new Promise(function(resolve, reject) {
                $timeout(function(){
                    console.log('cuarto');
                    resolve('Éxito: 4');
                }, 1502);  
            });
            return promesa;
        }

        function quinto() {
            var promesa = new Promise(function(resolve, reject) {
                $timeout(function(){
                    console.log('quinto');
                    resolve('Éxito: 5');
                }, 1501);  
            });
            return promesa;
        }

        function comprobarPromise() {
            
            return Promise.race([segundo(), tercer(), cuarto(), quinto()]);
        }

    }
})();
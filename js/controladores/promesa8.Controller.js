(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('promesa8Ctrl', promesa8Ctrl)

    function promesa8Ctrl($scope, $timeout) {

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
                var num = Math.floor((Math.random() * 2000) + 1000);
                $timeout(function(){
                    console.log('segundo');
                    resolve('Éxito: 2');
                }, num);  
            });
            return promesa;
        }

        function tercer() {
            var promesa = new Promise(function(resolve, reject) {
                var num = Math.floor((Math.random() * 2000) + 1000);
                $timeout(function(){
                    console.log('tercer');
                    resolve('Éxito: 3');
                }, num);  
            });
            return promesa;
        }

        function cuarto() {
            var promesa = new Promise(function(resolve, reject) {
                var num = Math.floor((Math.random() * 2000) + 1000);
                $timeout(function(){
                    console.log('cuarto');
                    resolve('Éxito: 4');
                }, num);  
            });
            return promesa;
        }

        function quinto() {
            var promesa = new Promise(function(resolve, reject) {
                var num = Math.floor((Math.random() * 2000) + 1000);
                $timeout(function(){
                    console.log('quinto');
                    resolve('Éxito: 5');
                }, num);  
            });
            return promesa;
        }

        function comprobarPromise() {
            
            return Promise.race([segundo(), tercer(), cuarto(), quinto()]);
        }

    }
})();
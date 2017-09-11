(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('promesa4Ctrl', promesa4Ctrl)

    function promesa4Ctrl($scope, $timeout) {

        init();
        
        function init($scope) {
            primer();
            segundo()
                .then(function(resp) {
                    console.log('then segundo', resp);
                    return tercer(resp);
                })
                .then(function(resp) {
                    console.log('then tercer', resp);
                    return cuarto(resp);
                })
                .then(function(resp) {
                    console.log('then cuarto', resp);
                    return quinto(resp);
                })
                .catch(function(err) {
                    console.log('Error');
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
                }, 1501);  
            });
            return promesa;
        }

        function tercer(dato) {
            var promesa = new Promise(function(resolve, reject) {
                $timeout(function(){
                    console.log('tercer', dato);
                    resolve('Éxito: 3');
                }, 1500);  
            });
            return promesa;
        }

        function cuarto(dato) {
            var promesa = new Promise(function(resolve, reject) {
                $timeout(function(){
                    console.log('cuarto', dato);
                    resolve('Éxito: 4');
                }, 1500);  
            });
            return promesa;               
        }

        function quinto(dato) {
            console.log('quinto', dato);                
        }

    }
})();
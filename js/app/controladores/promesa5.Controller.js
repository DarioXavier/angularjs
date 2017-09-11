(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('promesa5Ctrl', promesa5Ctrl)

    function promesa5Ctrl($scope, $timeout) {

        var num = 2; // 4 o 5 rror

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
                    resolve(num);
                }, 1500);  
            });
            return promesa;
        }

        function cuarto(obj) {
            if (obj == 4) {
                throw 'Error: 4'
            }

            console.log('cuarto '+obj);

            return obj;
        }

        function quinto(obj) {
            if (obj == 5) {
                throw 'Error: 5'
            }

            console.log('quinto '+obj);

            return obj;
        }

    }
})();
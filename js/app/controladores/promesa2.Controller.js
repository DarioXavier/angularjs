(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('promesa2Ctrl', promesa2Ctrl)

    function promesa2Ctrl($scope, $timeout) {

        init();
        
        function init($scope) {
            primer();
            segundo()
                .then(function(resp) {
                    console.log('then segundo', resp);
                    return tercer();
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

        function tercer() {
            console.log('tercer');
        }

    }
})();
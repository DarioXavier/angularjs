(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('promesa3Ctrl', promesa3Ctrl)

    function promesa3Ctrl($scope, $timeout) {

        init();
        
        function init($scope) {
            primer();
            segundo()
                .then(function(resp) {
                    console.log('then segundo', resp);

                    return tercer(resp);
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
            console.log('tercer', dato);
        }
    }
})();
(function(){
    'use strict';

    angular
        .module('myApp', [])
        
        .controller('myController', function($scope, $timeout){
            
            init();

            function init($scope) {
                /*primer();
                segundo()
                    .then(function(resp) {
                        return tercer(resp);
                    })
                    .then(function(resp) {
                        return cuarto(resp);
                    })
                    .then(function(resp) {
                        return quinto(resp);
                    })
                    .catch(function(err) {
                        console.log('Error');
                    });*/
                //tercer();
                comprobarPromise()
                    .then(function(resp){
                        console.log(resp);
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
                var promesa = new Promise(function(resolve, reject) {
                    $timeout(function(){
                        console.log('tercer');
                        resolve('Éxito: 3');
                    }, 1500);  
                });
                return promesa;
            }

            /*
            function segundo() {
                $timeout(function(){
                    console.log('segundo');
                }, 2500);  
            }

            function tercer() {
                console.log('tercer');
            }*/

            /*function tercer(obj) {
                if (obj == 3) {
                    throw 'Error: 3'
                }

                console.log('tercer '+obj);
                
                return obj;
            }*/

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

            function comprobarPromise() {
                
                return Promise.all([segundo(), tercer()]);
                //return Promise.race([segundo(), tercer()]);
            }

        });

}());
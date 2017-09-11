(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('promesa1Ctrl', promesa1Ctrl)

    function promesa1Ctrl($scope, $timeout) {

        init();
        
        function init($scope) {
            primer();
            segundo();
            tercer();
        }

        function primer() {
            console.log('primer');                
        }

        function segundo(){
            $timeout(function(){
                console.log('segundo');                
            }, 1501);

        }

        function tercer() {
            console.log('tercer');
        }

    }
})();
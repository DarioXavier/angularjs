(function(){
    'use strict';

    angular
        .module('moduloSrvs')
        .factory('myFctry1', myFctry1)

    function myFctry1(){

        var texto = 'Hola mundo';

        return {
            sms : texto
        }

    }

}());
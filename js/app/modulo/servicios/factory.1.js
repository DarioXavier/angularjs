(function(){
    'use strict';

    angular
        .module('moduloSrvs')
        .factory('myFactory1', myFctry1)

    function myFctry1(){

        var texto = 'Hola mundo desde el fctry1';

        return {  //siempre retorna una variable o uan fucnión para usarse en el controlador
            sms : texto
        }

    }

}());
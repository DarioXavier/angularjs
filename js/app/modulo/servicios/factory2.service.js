(function(){
    'use strict';

    angular
        .module('moduloSrvs')
        .factory('myFctry2', myFctry2)

    function myFctry2(){

        var personas = [
                {name:'Pablo', lastname: 'Córdova', edad:'10'},
                {name:'María', lastname: 'Paz', edad:'33'},
                {name:'Carla', lastname: 'Díaz', edad:'52'},
                {name:'Marco', lastname: 'Ortiz', edad:'1'},
                {name:'Dario', lastname: 'Torres', edad:'66'},
                {name:'Xavier', lastname: 'Mora', edad:'32'},
                {name:'Jose', lastname: 'Andino', edad:'99'}
            ];

        return { //siempre retorna una variable o uan fucnión para usarse en el controlador
            people : personas,
            remove : remove
        }

        function remove(obj){
            console.log(obj);
            var index = personas.indexOf(obj); //calcula el índice del objeto
            console.log(index);
            personas.splice(index, 1); //emilina a partir del elento index elimina 1 elemento
            console.log(personas);
        }

    }

}());
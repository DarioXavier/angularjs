(function(){
    'use strict';

    angular
        .module('moduloTaskSrvs')
        .factory('taskFtry', taskFtry)

    function taskFtry(){

        var tareas = [
                {name:'despertar'},
                {name:'desayunar'},
                {name:'ir al curso'},
                {name:'crear una rama'}
            ];

        return { 
            tasks : tareas,
            remove : remove,
            add : add
        }

        function remove(obj){
            console.log('obj ftry', obj);
            var index = personas.indexOf(obj);
            console.log('index ftry', index);
            personas.splice(index, 1);
            console.log('personas ftry',personas);
        }

        function add(obj){
            console.log(obj);
            refresco.unshift(obj);
            console.log('refresco', refresco);
        }

    }

}());
(function(){
    'use strict';

    angular
        .module('moduloTaskSrvs')
        .factory('taskFtry', taskFtry)

        taskFtry.$inject = ['TASKS']

    function taskFtry(TASKS){

        var tareas = TASKS;

        return { 
            tasks : tareas,
            remove : remove,
            add : add,
            edit : edit
        }

        function remove(obj){
            console.log('obj ftry', obj);
            var index = tareas.indexOf(obj);
            console.log('index ftry', index);
            tareas.splice(index, 1);
        }

        function add(obj){
            console.log(obj);
            tareas.unshift(obj); //añadir un elemento al inicio del arreglo
            console.log('refresco', tareas);
        }

        function edit(oldObj, newObj){
            console.log('oldObj ftry', oldObj);
            console.log('newObj ftry', newObj);
            var index = tareas.indexOf(oldObj);
            console.log('index oldObj ftry', index);
            tareas[index] = newObj;
        }

    }

}());
(function(){
    'use strict';

    angular
        .module('moduloSrvs')
        .factory('myFctry2', myFctry2)

    function myFctry2(){

        var personas = [{name:'Pablo',edad:'10'},
                        {name:'Maria',edad:'33'},
                        {name:'Carla',edad:'52'},
                        {name:'Marco',edad:'1'},
                        {name:'Dario',edad:'66'},
                        {name:'Xavier',edad:'32'},
                        {name:'Jose',edad:'99'}];

        return {
            people : personas,
            remove : remove
        }

        function remove(obj){
            console.log(obj);
            var index = personas.indexOf(obj);
            console.log(index);
            personas.splice(index, 1);
            console.log(personas);
        }

    }

}());
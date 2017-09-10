(function(){
    'use strict';

    angular
        .module('moduloCtrls')
        .controller('myCtrl3', myCtrl3)

    myCtrl3.$inject = ['myFctry2'];

    function myCtrl3(myFctry2){
        var ctrl3 = this;
        ctrl3.borrar = borrar;

        init();

        function init(){
            ctrl3.personas = myFctry2.people;
            console.log(myFctry2.people);
        }

        function borrar(obj){
            console.log(obj);
            myFctry2.remove(obj);
        }
    }
}());
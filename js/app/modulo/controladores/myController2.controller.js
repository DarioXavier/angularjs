(function(){
    'use strict';

    angular
        .module('moduloCtrls')
        .controller('myController2', myCtrl2);

    myCtrl2.$inject = ['myFactory1', 'myFctry2'];

    function myCtrl2(myFctry1, myFctry2){
        var ctrl2 = this;

        init();

        function init(){
            ctrl2.msj2 = myFctry1.sms + 'en el ctrl2';
            ctrl2.personas = myFctry2.people;
        }

    }

}());
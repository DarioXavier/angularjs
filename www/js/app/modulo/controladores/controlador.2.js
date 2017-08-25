(function(){
    'use strict';

    angular
        .module('moduloCtrls')
        .controller('myCtrl2', myCtrl2);

    myCtrl2.$inject = ['myFctry1'];

    function myCtrl2(myFctry1){
        var ctrl2 = this;

        init();

        function init(){
            ctrl2.msj2 = myFctry1.sms + ' ctrl2';;
        }

    }

}());
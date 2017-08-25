(function(){
    'use strict';


    angular
        .module('moduloCtrls')
        .controller('myCtrl1', myCtrl1)

    myCtrl1.$inject = ['myFctry1'];

    function myCtrl1(myFctry1){
        var ctrl1 = this;

        init();

        function init(){
            ctrl1.msj = myFctry1.sms + ' ctrl1';
        }
    }
}());
(function(){
    'use strict';

    angular
        .module('moduloCtrls')
        .controller('myController1', myCtrl1)

    myCtrl1.$inject = ['myFactory1']; //inyecci+on del servivio factoy

    function myCtrl1(myFactory1){
        var ctrl1 = this; //nuevo scope del controlador

        init();

        function init(){
            ctrl1.msj = myFactory1.sms + 'en el ctrl1'; //uso del servicio
        }
    }
}());
(function(){
    'use strict';

    angular
        .module('serviceModule')
        .controller('serviceController', serviceController)

        serviceController.$inject = ['httpService'];

    function serviceController(httpService){
        init();

        function init(){


        }

    }

}());
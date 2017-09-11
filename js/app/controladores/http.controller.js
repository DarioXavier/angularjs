(function(){
    'use strict';

    angular
        .module('httpCtrlMdl')
        .controller('httpCtrl', httpCtrl)

        httpCtrl.$inject = ['httpFtry1', 'httpFtr2', 'httpFtr3'];

    function httpCtrl(httpFtry1, httpFtr2, httpFtr3){
        httpCtrl = this;
        httpCtrl.datos;

        init();

        function init(){
            /*//servicio1
            httpFtr1.getPosts().then(function(resp){
                console.log('respuesta controlador', resp);
                httpCtrl.datos = resp.data;
                //httpCtrl.datos = resp.data.results; //API películas
                console.log('httpCtrl.datos', httpCtrl.datos);
            });

            httpFtr1.newPost().then(function(resp){
                console.log('respuesta crear un post', resp);
            });*/


            /*//servicio2
            httpFtr2.getPosts().then(function(resp){
                console.log('respuesta controlador', resp);
                httpCtrl.datos = resp.data;
                //httpCtrl.datos = resp.data.results; //API películas
                console.log('httpCtrl.datos', httpCtrl.datos);
            });

            httpCtrl.newDato = {name:'dario'};
            httpFtr2.newPost(httpCtrl.newDato).then(function(resp){
                console.log('respuesta crear un post', resp);
            })*/

            //servicio3
            httpFtr3.getPopularMovie().then(function(resp){
                console.log('respuesta controlador', resp);
                httpCtrl.datos = resp.data.results;
            });

        }
    }

}());
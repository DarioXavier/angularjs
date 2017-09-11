(function() {
    'use strict';

    angular
        .module('bookMdl')
        .directive('formPedidoDrctv', formPedidoDrctv);

        formPedidoDrctv.$inject = [];

    function formPedidoDrctv() {
        return {
            restrict: 'E',
            templateUrl: 'js/app/book/book.details/directives/form.pedido/form.pedido.html'
        }
    }
})();
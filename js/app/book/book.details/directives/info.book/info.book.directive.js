(function() {
    'use strict';

    angular
        .module('bookMdl')
        .directive('infoBookDrctv', infoBookDrctv);

        infoBookDrctv.$inject = [];

    function infoBookDrctv() {
        return {
            restrict: 'C',
            templateUrl: 'js/app/book/book.details/directives/info.book/info.book.html'
        }
    }
})();
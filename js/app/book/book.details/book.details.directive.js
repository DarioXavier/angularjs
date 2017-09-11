(function() {
    'use strict';

    angular
        .module('bookMdl')
        .directive('bookDetailsDrctv', bookDetailsDrctv);

        bookDetailsDrctv.$inject = [];

    function bookDetailsDrctv() {
        return {
            restrict: 'E',
            templateUrl: 'js/app/book/book.details/book.details.html'
        }
    }
})();
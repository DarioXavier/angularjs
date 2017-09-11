(function() {
    'use strict';

    angular
        .module('bookMdl')
        .directive('infoAuthorDrctv', infoAuthorDrctv);

        infoAuthorDrctv.$inject = [];

    function infoAuthorDrctv() {
        return {
            restrict: 'E',
            templateUrl: 'js/app/book/book.details/directives/info.author/info.author.html'
        }
    }
})();
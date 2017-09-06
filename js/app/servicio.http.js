(function(){
    'use strict';

    angular
        .module('serviceModule')
        .factory('httpService', httpService)

        httpService.$inject = ['$http'];

    function httpService($http){
        
        console.log('$http', $http);

        return {
            getPosts : getPosts,
            newPost: newPost,
            fn:fn
        }

        function fn(){
        }

        function getPosts(){
            
        }

        function newPost() {
            
        }
    }

}());
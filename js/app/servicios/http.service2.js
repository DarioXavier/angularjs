(function(){
    'use strict';

    angular
        .module('httpSrvcMdl')
        .factory('httpFtr2', httpFtr2)

        httpFtr2.$inject = ['$http'];

    function httpFtr2($http){
        
        return {
            getPosts : getPosts,
            newPost: newPost,
        }

        function getPosts(){
            var url = 'https://jsonplaceholder.typicode.com/'+'posts';
            //var url = 'https://api.themoviedb.org/3/movie/popular?api_key=6b048cca53550e7610bc494eb602b90a&language=es' //API películas

            return $http.get(url);
        }

        function newPost(data){
            var url = 'https://jsonplaceholder.typicode.com/'+'comments';

            return $http.post(url, data);
        }
    }

}());
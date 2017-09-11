(function(){
    'use strict';

    angular
        .module('httpSrvcMdl')
        .factory('httpFtry1', httpFtry1)

        httpFtry1.$inject = ['$http'];

    function httpFtry1($http){
        
        //console.log('$http', $http);

        return {
            getPosts : getPosts,
            newPost: newPost,
            //fn:fn
        }

        /*function fn(){
        }*/

        function getPosts(){
            var promise  = $http({
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/posts'
                //url: 'https://api.themoviedb.org/3/movie/popular?api_key=6b048cca53550e7610bc494eb602b90a&language=es' //API películas
            })
            .then(function(resp){
                console.log('toda la respuesta', resp);
                console.log('respuesta data', resp.data);
                console.log('respuesta status', resp.status);

                return resp;
            });

            return promise;
        }

        function newPost(){
            return $http({
                method:'POST',
                url:'https://jsonplaceholder.typicode.com/posts',
                data:{name:'dario'}
            });
        }
    }

}());
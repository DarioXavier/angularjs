(function(){
    'use strict';

    angular
        .module('httpSrvcMdl')
        .factory('httpFtr3', httpFtr3)

        httpFtr3.$inject = ['$http', 'API'];

    function httpFtr3($http, API){
        var base_url = API.URL;
        
        return {
            getPopularMovie : getPopularMovie
        }

        function getPopularMovie(){
            var url = base_url + 'movie/popular'; //API películas
            var config = {
                params: {api_key : API.KEY}
            };

            return $http.get(url, config);
        }
    }

}());
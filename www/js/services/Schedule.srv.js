(function(){
	'use strict';

	angular
	.module('app')
	.factory('Talks', Talks);

	function Talks($http, $log, $q){
		var service = {
			fetch: fetch,
      getById: getById
		};

		return service;
		
		function fetch(){
			return $http.get('schedule.json');
		}

    function getById( _id ){
      var q = $q.defer();
      fetch().then(function(res){
         q.resolve( _.filter(res.data, {"_id": _id})[0] );
      });
      return q.promise;
    }

	}
})();

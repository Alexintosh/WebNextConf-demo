(function(){
	'use strict';

	angular
	.module('app')
	.controller('DashboardCtrl', DashboardCtrl);

	function DashboardCtrl($scope, $rootScope, $u, Talks, $stateParams) {
		var vm = this;
				
		$scope.$on('$ionicView.afterEnter', function(){
			var tracks;
      var id = $stateParams.id || 1;
      $scope.title = "Room " + id;
      Talks.fetch().then(function(res){
        tracks = res.data;
        $scope.room = _.sortBy( _.filter(tracks, { 'track': 'track'+id}), 'time');
      });
    });

	}
})();

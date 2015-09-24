(function(){
	'use strict';

	angular
	.module('app')
	.controller('TalkCtrl', TalkCtrl);

	function TalkCtrl($scope, $stateParams, $u, Talks) {
				
		$scope.$on('$ionicView.afterEnter', function(){
			 Talks.getById( $stateParams.id ).then(function(val){
        $scope.talk = val;
      });
    });
	}
})();


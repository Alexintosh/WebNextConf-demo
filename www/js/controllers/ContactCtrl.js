(function(){
	'use strict';

	angular
	.module('app')
	.controller('ContactCtrl', ContactCtrl);

	function ContactCtrl($scope, $settings, MapsHelper, $window, uiGmapIsReady, $log) {
    $scope.showMap = true;
    updPos(45.518549, 9.213409, true);

    function updPos(lat, lng, upd){
			$scope.map = { center: { latitude: lat, longitude: lng}, zoom: 18 };
			$scope.marker = {
				id: 0,
				coords: {
					latitude: lat,
					longitude: lng
				},
				options: { draggable: false }
			};

			uiGmapIsReady.promise(1).then(function(){
        $log.debug("Maps loaded");
				$scope.showMap = true;
			});
		}

	}
})();

(function(){
	'use strict';

	angular
	.module('app')
	.controller('AppCtrl', AppCtrl);

	function AppCtrl($scope, $u, $rootScope, $settings, contactMail) {

		$scope.contactUs = contactUs;

		$scope.$on('settingsChanged', function() {
			$rootScope.settings = $settings.fetch();
		});

		function contactUs(){
			$u.sendMail({
				to: contactMail,
				subject: 'Informations'
			});
		}
	}
})();

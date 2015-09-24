angular.module('app', [
	'ionic',
	'ngCordova',
	'uiGmapgoogle-maps',
])
/*
* Setup here some information of your app
*/
.constant('mapsAppKey', '')
.constant('contactMail', '')
.constant('ApiEndpoint', {
  /*
  * If you need to use a proxy for CORS issue
  * write your local ip HERE
  */
  url: 'http://192.168.XXX.XXX:8100/api'
})

.run(function(
		$ionicPlatform, 
		$cordovaNetwork,
		$localstorage,
		$u,
		$rootScope
	) {
	$ionicPlatform.ready(function() {

		//Enable native scrolling on Android
		if(!ionic.Platform.isIOS()) $ionicConfigProvider.scrolling.jsScrolling(false);

		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
	});
})

.config(function($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider, mapsAppKey) {

	/*
	* Config your app here
	*/
	document.addEventListener("deviceready", function () {

		/*
		* Maps Application
		* Insert app Key
		*/
		uiGmapGoogleMapApiProvider.configure({
			key: mapsAppKey,
			v: '3.17',
			libraries: 'geometry'
		});

}, false);

/*
* App Routing
*/
$stateProvider

	.state('app', {
		url: "/app",
		abstract: true,
		templateUrl: "templates/menu.html",
		controller: 'AppCtrl'
	})
	.state('app.room', {
    url: "/room/:id",
		views: {
			'menuContent': {
				templateUrl: "templates/dashboard.html",
				controller: "DashboardCtrl as vm"
			}
		}
	})
  .state('app.talk', {
    url: "/talk/:id",
		views: {
			'menuContent': {
				templateUrl: "templates/talk_detail.html",
				controller: "TalkCtrl"
			}
		}
	})
  .state('app.contacts', {
		url: "/contacts",
		views: {
			'menuContent': {
				templateUrl: "templates/contact.html",
				controller: 'ContactCtrl'
			}
		}
	})
	.state('app.settings', {
		url: "/settings",
		views: {
			'menuContent': {
				templateUrl: "templates/settings.html",
				controller: 'SettingsCtrl as vm'
			}
		}
	});

$urlRouterProvider.otherwise('/app/room/1');
});

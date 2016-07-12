angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'ContactController'
		})
	
	.when('/videos', {
			templateUrl: 'views/video.html',
			controller: 'VideoController'
		})

		.when('/photos', {
			templateUrl: 'views/photos.html',
			controller: 'PhotoController'	
		});


	$locationProvider.html5Mode(true);

}]);
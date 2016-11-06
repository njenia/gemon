angular.module("gemon", ["chart.js", "ui.router", "ngMaterial"])
	.config(function($stateProvider, $urlRouterProvider) {
	  var main = {
	    name: 'main',
	    url: '/main',
	    templateUrl: 'static/templates/main.html',
	    controller: 'MainCtrl'
	  };

	  var user = {
	    name: 'user',
	    url: '/user/{userId}',
		resolve: {
		    user: function(UsersService, $stateParams) {
		      return UsersService.getUser($stateParams.userId);
	    	}
		}, views: {
  			'': {
  				templateUrl: 'static/templates/user.html',
	    		controller: 'UsersCtrl'
  			},
  			'stepsNumberChart@user': {
  				templateUrl: 'static/templates/stepsNumberChart.html',
  				controller: 'StepsNumberChartCtrl'
  			}
	  	}
	  }

	  $stateProvider.state(main);
	  $stateProvider.state(user);
	  $urlRouterProvider.otherwise('/main');
	});
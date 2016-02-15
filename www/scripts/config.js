app.config(function ($routeProvider) {
  $routeProvider
    .when('/locals', {
      templateUrl: 'views/locals.html',
      controller: 'localsController'
    })
    .when('/local/:local', {
      templateUrl: 'views/local.html',
      controller: 'localController'
    })
    .otherwise({redirectTo: '/locals'});
});

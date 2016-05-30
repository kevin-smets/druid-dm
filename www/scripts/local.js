app.controller('localController', function ($scope, $http, $routeParams) {
  $scope.dependencies = [];

  $http({
    method: 'GET',
    url: 'http://localhost:3221/dep-rep/local/' + $routeParams.local
  }).then(function successCallback(response) {
    $scope.dependencies = response.data;
    $scope.loaded = true;
  }, function errorCallback(response) {
    console.error(response);
  });
});



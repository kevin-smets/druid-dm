app.controller('localsController', function ($scope, $http, $location) {
  $scope.locals = [];

  $scope.viewDetail = function(local){
    $location.path('/local/' + local);
  };

  $http({
    method: 'GET',
    url: 'http://localhost:3221/dep-rep/locals'
  }).then(function successCallback(response) {
    console.debug(response.data);

    $scope.locals = response.data.locals.sort();
    $scope.loaded = true;
  }, function errorCallback(response) {
    console.error(response);
  });
});

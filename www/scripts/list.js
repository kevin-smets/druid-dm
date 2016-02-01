app
  .controller('AppCtrl', function ($scope, $http) {
    $scope.dependencies = [];

    $http({
      method: 'GET',
      url: 'http://localhost:3000/dep-rep?remote=https://raw.githubusercontent.com/kevin-smets/clam/master/package.json'
    }).then(function successCallback(response) {
      console.debug(response.data);

      $scope.dependencies = response.data;
      $scope.loaded = true;
    }, function errorCallback(response) {
      console.log(response);
    });
  });

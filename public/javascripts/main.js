angular.module('simc', [])
  .controller('SimulationController', function($scope, $http) {

    $scope.DPS = "Simming";

    $http({method: 'GET', url: '/sim/do?region=us&realm=tichondrius&name=donpain'}).
      success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.DPS = data.DPS;
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });

  });

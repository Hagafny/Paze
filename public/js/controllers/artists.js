app.controller('ArtistsCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/mus-artists.json').success(function(data) {
      $scope.artists = data;
    });
  }]);

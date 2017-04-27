app.controller('TrendingSongsCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/mus-trending-songs.json').success(function(data) {
      $scope.songs = data;
    });
  }]);

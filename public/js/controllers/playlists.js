app.controller('PlaylistsCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/mus-playlists.json').success(function(data) {
      $scope.playlists = data;
    });
  }]);

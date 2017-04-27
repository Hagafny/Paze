app.controller('TrendingAlbumsCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/mus-trending-albums.json').success(function(data) {
      $scope.albums = data;
    });
  }]);

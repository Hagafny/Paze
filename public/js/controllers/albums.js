app.controller('AlbumsCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/mus-albums.json').success(function(data) {
      $scope.albums = data;
    });
  }]);

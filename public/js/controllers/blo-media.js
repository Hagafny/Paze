app.controller('BlogMediaCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/blo-media.json').success(function(data) {
      $scope.medias = data;
    });
  }]);

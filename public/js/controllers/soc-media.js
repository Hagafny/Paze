app.controller('BlogMediaCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/soc-media.json').success(function(data) {
      $scope.medias = data;
    });
  }]);

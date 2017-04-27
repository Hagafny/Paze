app.controller('FriendsCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/soc-friends.json').success(function(data) {
      $scope.friends = data;
    });
  }]);

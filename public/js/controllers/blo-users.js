app.controller('UsersCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/blo-users.json').success(function(data) {
      $scope.users = data;
    });
  }]);

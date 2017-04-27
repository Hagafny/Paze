app.controller('GroupsCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/soc-groups.json').success(function(data) {
      $scope.groups = data;
    });
  }]);

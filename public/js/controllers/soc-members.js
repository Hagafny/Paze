app.controller('MembersCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/soc-members.json').success(function(data) {
      $scope.members = data;
    });
  }]);

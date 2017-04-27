app.controller('ProfessorsCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/uni-professors.json').success(function(data) {
      $scope.professors = data;
    });
  }]);

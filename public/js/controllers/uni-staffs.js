app.controller('UniversityStaffsCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/uni-staffs.json').success(function(data) {
      $scope.staffs = data;
    });
  }]);

app.controller('HospitalStaffsCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/hos-staffs.json').success(function(data) {
      $scope.staffs = data;
    });
  }]);

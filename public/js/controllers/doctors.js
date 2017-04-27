app.controller('DoctorsCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/hos-doctors.json').success(function(data) {
      $scope.doctors = data;
    });
  }]);

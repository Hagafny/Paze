app.controller('PatientsCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/hos-patients.json').success(function(data) {
      $scope.patients = data;
    });
  }]);

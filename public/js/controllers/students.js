app.controller('StudentsCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/uni-students.json').success(function(data) {
      $scope.students = data;
    });
  }]);

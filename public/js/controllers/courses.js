app.controller('CoursesCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/uni-courses.json').success(function(data) {
      $scope.courses = data;
    });
  }]);

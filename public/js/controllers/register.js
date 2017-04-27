'use strict';

// signup controller
app.controller('RegisterFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.user = {};
    $scope.authError = null;
    $scope.register = function() {
      $scope.authError = null;
      // Try to create
      $http.post('data/register.json', {name: $scope.user.name, email: $scope.user.email, password: $scope.user.password})
      .then(function(response) {
        if ( !response.data.user ) {
          $scope.authError = response;
        }else{
          $state.go('app.dashboard');
        }
      }, function(x) {
        $scope.authError = 'Server Error';
      });
    };
  }])
 ;
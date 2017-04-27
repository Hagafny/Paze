app.controller('MessagesDropDownCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/messages.json').success(function(data) {
      $scope.messages = data;
    });
  }]);



app.controller('NotificationsDropDownCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/notifications.json').success(function(data) {
      $scope.notifications = data;
    });
  }]);
'use strict';

app.controller('ParticipantCtrl', function ($scope, $http, $stateParams) {
  var participantId = $stateParams.id;
  $http.get('api/participants/' + participantId)
    .success(function (response) {
      $scope.participant = response.participant;
      $scope.surveys = response.surveys;
      var pazePoints = 0;
      var amountOfSurveys = response.surveys.length;
      for (var i = 0; i < amountOfSurveys; i++) {
        pazePoints += response.surveys[i].surveyId.pazePoints;
      }

      $scope.pazePoints = pazePoints;

      var rating = 0;

      switch (response.participant._id) {
        case "59020ee40ddf870004a4ea1f":
          rating = 97;
          break;
      }

      $scope.rating = rating;
      $scope.amountOfSurveys = amountOfSurveys;
    }).error(function (err) {
      alert('Unable to get participant');
    });
});


'use strict';

app.controller('PublisherCtrl', function ($scope, $http, $stateParams) {
    var publishertId = $stateParams.id;
    $http.get('api/publishers/' + publishertId)
        .success(function (response) {
            console.log(response);


            $scope.publisher = response.publisher;
            $scope.surveys = response.surveys;
            //   var pazePoints = 0;
            //   var amountOfSurveys = response.surveys.length;
            //   for (var i = 0; i < amountOfSurveys; i++) {
            //     pazePoints += response.surveys[i].surveyId.pazePoints;
            //   }

            //   $scope.pazePoints = pazePoints;

            //   var rating = 0;

            //   switch (response.participant._id) {
            //     case "59020ee40ddf870004a4ea1f":
            //       rating = 97;
            //       break;
            //   }

            //   $scope.rating = rating;
            //   $scope.amountOfSurveys = amountOfSurveys;


            // $scope.max = 200;

            // $scope.dynamic = 100;

        }).error(function (err) {
            alert('Unable to get publisher');
        });
});

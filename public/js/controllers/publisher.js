'use strict';

app.controller('PublisherCtrl', function ($scope, $http, $stateParams) {
    var publishertId = $stateParams.id;
    $http.get('api/publishers/' + publishertId)
        .success(function (response) {


            $scope.publisher = response.publisher;
            $scope.surveys = response.surveys;
            console.log(response.surveys);

            $scope.selectedSurvey = response.surveys[0].survey;

            $scope.changeSelectedSurvey = function (selectedSurvey) {
                alert('here');
                console.log(selectedSurvey);
                $scope.selectedSurvey = selectedSurvey;
            }
            
        }).error(function (err) {
            alert('Unable to get publisher');
        });
});

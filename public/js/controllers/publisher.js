'use strict';

app.controller('PublisherCtrl', function ($scope, $http, $stateParams) {
    var publishertId = $stateParams.id;


    var colors = ["#31C0BE", "#c7254e", "#98a0d3", "#9589be",
        "#9589be",
        "#da1a3c",
        "#3f35dd",
        "#83a984",
        "#deeed4",
        "#a1394e",
        "#81cd8b",
        "#d3389f",
        "#c108ea",
        "#ba40d2",
    ]

    function generateRandomColorArray(arrayLength) {
        var colorArray = [];

        var random = Math.random() * 10;
        for (var i = 0; i < arrayLength; i++) {
            var newIndex = Math.floor((random + i) % colors.length);
            colorArray[i] = colors[newIndex];
        }

        return colorArray;
    }


    $http.get('api/publishers/' + publishertId)
        .success(function (response) {

            $scope.publisher = response.publisher;
            $scope.surveys = response.surveys;


            showSelectedSurvey(response.surveys[0].survey);


        }).error(function (err) {
            alert('Unable to get publisher');
        });

    var showSelectedSurvey = function (selectedSurvey) {

        var aggregatedAnswers = [];
        for (var i = 0; i < selectedSurvey.questions.length; i++) {

            var question = selectedSurvey.questions[i];
            var answers = [];
            if (question.type == 1) {
                answers = [{
                    label: "Positive",
                    value: 0
                },
                {
                    label: "Negative",
                    value: 0
                },
                {
                    label: "Neutral",
                    value: 0
                }];
            }
            else if (question.type == 0) {
                for (var j = 0; j < question.options.length; j++) {
                    var questionOption = question.options[j];
                    answers.push({
                        label: questionOption,
                        value: 0
                    })
                }
            }

            aggregatedAnswers[i] = {
                q: question.content,
                answers: answers,
                colors: generateRandomColorArray(answers.length)
            };
        }

        var surveyId = selectedSurvey._id;

        $http.get('api/surveys/' + surveyId + '/answers')
            .success(function (response) {

                var answersLength = response.length;
                for (var m = 0; m < answersLength; m++) {
                    var personAnswers = response[m].answers;
                    for (var t = 0; t < personAnswers.length; t++) {
                        var specificAnswer = personAnswers[t];

                        if (specificAnswer.sentiment != undefined) {
                            switch (specificAnswer.sentiment) {
                                case 1:

                                    aggregatedAnswers[t].answers[0].value++;
                                    break;
                                case -1:

                                    aggregatedAnswers[t].answers[1].value++;
                                    break;
                                case 0:

                                    aggregatedAnswers[t].answers[2].value++;
                                    break;
                            }
                        }
                        else {

                            for (var h = 0; h < aggregatedAnswers[t].answers.length; h++) {
                                var anotherThing = aggregatedAnswers[t].answers[h];
                                if (anotherThing.label == specificAnswer.content) {
                                    anotherThing.value++;
                                    break;
                                }
                            }

                        }
                    }
                }

               $scope.aggregatedAnswers = aggregatedAnswers;
               console.log(aggregatedAnswers);
            }).error(function (err) {
                alert('Unable to get all answers');
            });



        $scope.selectedSurvey = selectedSurvey;
    }

    $scope.showSelectedSurvey = showSelectedSurvey;
});

(function() {
    'use strict';

    /*  var app = angular.module('examples', ['chart.js', 'ui.bootstrap']);*/

    app.config(function(ChartJsProvider) {
        // Configure all charts
        ChartJsProvider.setOptions({
            colours: ['#FF6E40', '#FBC02E', '#673AB7', '#66bd78', '#f05050'],
            responsive: true
        });
        // Configure all doughnut charts
        ChartJsProvider.setOptions('Doughnut', {
            animateScale: true
        });
    });

    app.controller('MenuCtrl', function($scope) {
        $scope.isCollapsed = true;
        $scope.charts = ['Line', 'Bar', 'Doughnut', 'Pie', 'Polar Area', 'Radar', 'Base'];
    });




    app.controller('BlogPassingCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.options = {
            scaleShowVerticalLines: false
        };
        $scope.labels = ['2009', '2010', '2011', '2012', '2013', '2014', '2015'];
        $scope.series = ['Series A', 'Series B'];
        $scope.data = [
            [4500, 5100, 5000, 6100, 1600, 3500, 4500],
            [7800, 8800, 3000, 4900, 5600, 6000, 3000]
        ];
        $scope.colours = [{ // grey
                fillColor: "#5d7bf7",
                strokeColor: "#5d7bf7",
                highlightFill: "#5d7bf7",
                highlightStroke: "#5d7bf7"
        }, { // dark grey
                fillColor: "#f72f5e",
                strokeColor: "#f72f5e",
                highlightFill: "#f72f5e",
                highlightStroke: "#f72f5e"
        }];

        $timeout(function() {
            $scope.options = {
                scaleShowVerticalLines: true
            };
        }, 3000);
    }]);


    app.controller('BlogSurveyCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November'];
        $scope.series = ['Quality of Blog', 'Quality of Articles'];
        $scope.data = [
                [178, 88, 190, 179, 186, 97, 90, 179, 186, 97, 90],
                [185, 189, 80,185, 189, 80, 89, 81, 176, 75, 80]
        ];
        $scope.onClick = function(points, evt) {
            console.log(points, evt);
        };
        $scope.onHover = function(points) {
            if (points.length > 0) {
                console.log('Point', points[0].value);
            } else {
                console.log('No point');
            }
        };
        $scope.colours = [{ // grey
                fillColor: "rgba(93,123,247,1)",
                strokeColor: "#5d7bf7",
                pointColor: "#5d7bf7",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#5d7bf7"
        }, { // dark grey
                fillColor: "rgba(247,47,94,1)",
                strokeColor: "#f72f5e",
                pointColor: "#f72f5e",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#f72f5e"
        }];



    }]);

    app.controller('BlogSatisfactionCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.options = {
            scaleShowVerticalLines: false
        };
        $scope.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November'];
        $scope.series = ['User Interface', 'User Experience'];
        $scope.data = [
            [88, 90, 99, 56, 77,88, 90, 99, 56, 77,67],
            [91, 70, 61, 66, 55,91, 70, 61, 66, 55,65],
        ];
        $scope.colours = [{ // grey
                fillColor: "#5d7bf7",
                strokeColor: "#5d7bf7",
                highlightFill: "#5d7bf7",
                highlightStroke: "#5d7bf7"
        }, { // dark grey
                fillColor: "#f72f5e",
                strokeColor: "#f72f5e",
                highlightFill: "#f72f5e",
                highlightStroke: "#f72f5e"
        }];

        $timeout(function() {
            $scope.options = {
                scaleShowVerticalLines: true
            };
        }, 3000);
    }]);


    app.controller('BlogTestScoreCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        $scope.series = ['Web Design Articles', 'Programming Articles','Branding Articles','Graphic Design Articles'];
        $scope.data = [
                [78, 68, 70, 89, 86, 97, 60],
                [65, 69, 70, 81, 76, 45, 50],
                [68, 78, 80, 99, 66, 97, 90],
                [68, 60, 90, 89, 76, 57, 70]
        ];
        $scope.onClick = function(points, evt) {
            console.log(points, evt);
        };
        $scope.onHover = function(points) {
            if (points.length > 0) {
                console.log('Point', points[0].value);
            } else {
                console.log('No point');
            }
        };
        $scope.colours = [{ // grey
                fillColor: "rgba(93,123,247,0.2)",
                strokeColor: "#5d7bf7",
                pointColor: "#5d7bf7",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#5d7bf7"
        }, { // dark grey
                fillColor: "rgba(247,47,94,0.2)",
                strokeColor: "#f72f5e",
                pointColor: "#f72f5e",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#f72f5e"
        }, { // dark grey
                fillColor: "rgba(253,180,93,0.2)",
                strokeColor: "#fdb45d",
                pointColor: "#fdb45d",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#fdb45d"
        }, { // dark grey
                fillColor: "rgba(158,158,158,0.2)",
                strokeColor: "#9e9e9e",
                pointColor: "#9e9e9e",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#9e9e9e"
        }];


    }]);

    function getRandomValue(data) {
        var l = data.length,
            previous = l ? data[l - 1] : 50;
        var y = previous + Math.random() * 10 - 5;
        return y < 0 ? 0 : y > 100 ? 100 : y;
    }

})();

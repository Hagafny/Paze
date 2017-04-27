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



    app.controller('SitePassingCtrl', ['$scope', '$timeout', function($scope, $timeout) {
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
                fillColor: "#5bc9c5",
                strokeColor: "#5bc9c5",
                highlightFill: "#5bc9c5",
                highlightStroke: "#5bc9c5"
        }, { // dark grey
                fillColor: "#7a6a93",
                strokeColor: "#7a6a93",
                highlightFill: "#7a6a93",
                highlightStroke: "#7a6a93"
        }];

        $timeout(function() {
            $scope.options = {
                scaleShowVerticalLines: true
            };
        }, 3000);
    }]);


    app.controller('SiteSurveyCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        $scope.series = ['Quality of Communication', 'Quality of Groups','Quality of Profile'];
        $scope.data = [
                [78, 88, 90, 79, 86, 97, 90],
                [85, 89, 80, 81, 76, 75, 80],
                [88, 90, 90, 69, 76, 57, 80]
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
                fillColor: "rgba(91,201,197,0.5)",
                strokeColor: "#5bc9c5",
                pointColor: "#5bc9c5",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#5bc9c5"
        }, { // dark grey
                fillColor: "rgba(122,106,147,0.5)",
                strokeColor: "#7a6a93",
                pointColor: "#7a6a93",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#7a6a93"
        }, { // dark grey
                fillColor: "rgba(253,180,93,0.5)",
                strokeColor: "#fdb45d",
                pointColor: "#fdb45d",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#fdb45d"
        }];


    }]);

    app.controller('SiteSatisfactionCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.options = {
            scaleShowVerticalLines: false
        };
        $scope.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
        $scope.series = ['Series A', 'Series B','Series C'];
        $scope.data = [
            [81, 80, 81, 86, 75],
            [88, 90, 99, 56, 77],
            [91, 70, 61, 66, 55],
        ];
        $scope.colours = [{ // grey
                fillColor: "#5bc9c5",
                strokeColor: "#5bc9c5",
                highlightFill: "#5bc9c5",
                highlightStroke: "#5bc9c5"
        }, { // dark grey
                fillColor: "#7a6a93",
                strokeColor: "#7a6a93",
                highlightFill: "#7a6a93",
                highlightStroke: "#7a6a93"
        }, { // dark grey
                fillColor: "#fdb45d",
                strokeColor: "#fdb45d",
                highlightFill: "#fdb45d",
                highlightStroke: "#fdb45d"
        }];

        $timeout(function() {
            $scope.options = {
                scaleShowVerticalLines: true
            };
        }, 3000);
    }]);


    app.controller('SiteTestScoreCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        $scope.series = ['Students','Bloggers','Celebrities','Industrialists','Marketers'];
        $scope.data = [
                [65, 19, 70, 81, 86, 95, 20],
                [65, 29, 40, 81, 86, 45, 20],
                [55, 69, 50, 81, 56, 45, 40],
                [65, 69, 70, 81, 66, 45, 50],
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
                fillColor: "rgba(122,106,147,0.2)",
                strokeColor: "#7a6a93",
                pointColor: "#7a6a93",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#7a6a93"
        }, { // dark grey
                fillColor: "rgba(91,201,197,0.2)",
                strokeColor: "#5bc9c5",
                pointColor: "#5bc9c5",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#5bc9c5"
        }, { // dark grey
                fillColor: "rgba(253,180,93,0.2)",
                strokeColor: "#fdd835",
                pointColor: "#fdd835",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#fdd835"
        }, { // dark grey
                fillColor: "rgba(76,175,80,0.2)",
                strokeColor: "#4caf50",
                pointColor: "#4caf50",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#4caf50"
        }, { // dark grey
                fillColor: "rgba(244,67,54,0.2)",
                strokeColor: "#f44336",
                pointColor: "#f44336",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#f44336"
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

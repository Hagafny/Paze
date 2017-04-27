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




    app.controller('VisitorBudgetCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.labels = ['2010', '2011', '2012', '2013', '2014', '2015'];
        $scope.series = ['Listening Music', 'Browsing', 'Social Activity', 'Uploading Music', 'Downloading Music'];
        $scope.data = [
            [6800, 5900, 8000, 5100, 9600, 9500],
            [4800, 5900, 5000, 7100, 8600, 7500],
            [5800, 4900, 5000, 5100, 6600, 4500],
            [2700, 4900, 5000, 7900, 7200, 9700],
            [5700, 6900, 8000, 3900, 9600, 9700]
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
                fillColor: "rgba(83,190,195,0)",
                strokeColor: "#53bec3",
                pointColor: "#53bec3",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#53bec3"
        }, { // dark grey
                fillColor: "rgba(232,111,92,0)",
                strokeColor: "#e86f5c",
                pointColor: "#e86f5c",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#e86f5c"
        }, { // dark grey
                fillColor: "rgba(253,180,93,0)",
                strokeColor: "#fdd835",
                pointColor: "#fdd835",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#fdd835"
        }, { // dark grey
                fillColor: "rgba(76,175,80,0)",
                strokeColor: "#4caf50",
                pointColor: "#4caf50",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#4caf50"
        }, { // dark grey
                fillColor: "rgba(244,67,54,0)",
                strokeColor: "#f44336",
                pointColor: "#f44336",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#f44336"
        }, { // dark grey
                fillColor: "rgba(158,158,158,0)",
                strokeColor: "#9e9e9e",
                pointColor: "#9e9e9e",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#9e9e9e"
        }];

    }]);


    app.controller('VisitorAdmissionsCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.labels = ['2010', '2011', '2012', '2013', '2014', '2015'];
        $scope.series = ['Band Artist', 'Music Fan', 'Music Composer'];
        $scope.data = [
            [4800, 17800, 5000, 7900, 15600, 7700],
            [16500, 5900, 8000, 8100, 15600, 15500],
            [5500, 6900, 13200, 5100, 5600, 4500],
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
                fillColor: "rgba(83,190,195,0.5)",
                strokeColor: "#53bec3",
                pointColor: "#53bec3",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#53bec3"
        }, { // dark grey
                fillColor: "rgba(232,111,92,0.5)",
                strokeColor: "#e86f5c",
                pointColor: "#e86f5c",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#e86f5c"
        }, { // dark grey
                fillColor: "rgba(253,180,93,0.4)",
                strokeColor: "#fdd835",
                pointColor: "#fdd835",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#fdd835"
        }];

    }]);


    app.controller('VisitorActivityCtrl', function($scope) {
        $scope.labels = ['Listening Music', 'Browsing', 'Social Activity', 'Uploading Music', 'Downloading Music', 'Likes and Shares', 'Comments'];

        $scope.data = [
            [65, 59, 90, 81, 56, 55, 40],
            [45, 69, 60, 31, 76, 65, 80],
            [28, 48, 40, 19, 96, 27, 90]
        ];

        $scope.onClick = function(points, evt) {
            console.log(points, evt);
        };
        $scope.colours = [{ // grey
                fillColor: "rgba(83,190,195,0.8)",
                strokeColor: "#53bec3",
                pointColor: "#53bec3",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#53bec3"
        }, { // dark grey
                fillColor: "rgba(232,111,92,0.8)",
                strokeColor: "#e86f5c",
                pointColor: "#e86f5c",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#e86f5c"
        }, { // dark grey
                fillColor: "rgba(253,180,93,0.8)",
                strokeColor: "#fdb45d",
                pointColor: "#fdb45d",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#fdb45d"
        }];
    });

    app.controller('VisitorGenderCountCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.labels = ['Male Adults', 'Female Adults', 'Under 18'];
        $scope.data = [0, 0, 0];
        $scope.colours = [{ // grey
                fillColor: "#53bec3",
                strokeColor: "#53bec3",
                highlightFill: "#53bec3",
                highlightStroke: "#53bec3"
        }, { // dark grey
                fillColor: "#e86f5c",
                strokeColor: "#e86f5c",
                highlightFill: "#e86f5c",
                highlightStroke: "#e86f5c"
        }, { // dark grey
                fillColor: "rgba(76,175,80,1.0)",
                strokeColor: "rgba(76,175,80,1.0)",
                highlightFill: "rgba(76,175,80,1.0)",
                highlightStroke: "rgba(76,175,80,1.0)"
        }];

        $timeout(function() {
            $scope.data = [450, 550, 100];
        }, 500);
    }]);


    function getRandomValue(data) {
        var l = data.length,
            previous = l ? data[l - 1] : 50;
        var y = previous + Math.random() * 10 - 5;
        return y < 0 ? 0 : y > 100 ? 100 : y;
    }

})();

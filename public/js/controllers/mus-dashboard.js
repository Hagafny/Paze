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



    app.controller('DashboardLineCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9','Week 10','Week 11','Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20','Week 21','Week 22'];
        $scope.series = ['Page Views', 'Visitors'];
        $scope.data = [
            [23, 10, 13, 24, 12, 21, 19, 21, 19, 10, 24,23, 10, 13, 24, 12, 21, 19, 21, 19, 10, 24],
            [7, 13, 8, 10, 18, 11, 17, 9, 21, 19, 17,7, 13, 8, 10, 18, 11, 17, 9, 21, 19, 17]
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
                fillColor: "rgba(83,190,195,0.8)",
                strokeColor: "rgba(83,190,195,1)",
                pointColor: "rgba(83,190,195,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(83,190,195,0.8)"
        }, { // dark grey
                fillColor: "rgba(232,111,92,0.7)",
                strokeColor: "rgba(232,111,92,1.0)",
                pointColor: "rgba(232,111,92,1.0)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(232,111,92,0.7)"
        }];

         $scope.options = {
                scaleShowVerticalLines: false,
                scaleShowLabels: true,
                scaleLineWidth: 1,
                scaleLineColor: "rgba(0,0,0,0.1)",
                scaleShowHorizontalLines: false,
                scaleGridLineWidth : 1,
                scaleShowGridLines : false,
                scaleGridLineColor : "rgba(0,0,0,0)",
                pointDotRadius : 5,
                pointHitDetectionRadius : 10,

            };


    }]);

    app.controller('DashboardBarCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.options = {
            scaleShowVerticalLines: false
        };


        $scope.labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9','Week 10','Week 11','Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20','Week 21','Week 22'];
        $scope.series = ['Page Views', 'Visitors'];
        $scope.data = [
            [23, 10, 13, 24, 12, 21, 19, 21, 19, 10, 24,23, 10, 13, 24, 12, 21, 19, 21, 19, 10, 24],
            [7, 13, 8, 10, 18, 11, 17, 9, 21, 19, 17,7, 13, 8, 10, 18, 11, 17, 9, 21, 19, 17]
        ];
        $scope.colours = [{ // grey
                fillColor: "rgba(83,190,195,1)",
                strokeColor: "rgba(83,190,195,1)",
                highlightFill: "rgba(83,190,195,1)",
                highlightStroke: "rgba(83,190,195,1)"
        }, { // dark grey
                fillColor: "rgba(232,111,92,1.0)",
                strokeColor: "rgba(232,111,92,1)",
                highlightFill: "rgba(232,111,92,1)",
                highlightStroke: "rgba(232,111,92,1.0)"
        }];

         $scope.options = {
                scaleShowVerticalLines: false,
                scaleShowLabels: true,
                scaleLineWidth: 1,
                scaleLineColor: "rgba(0,0,0,0.1)",
                scaleShowHorizontalLines: false,
                scaleGridLineWidth : 1,
                scaleShowGridLines : false,
                scaleGridLineColor : "rgba(0,0,0,0)",
                pointDotRadius : 5,
                pointHitDetectionRadius : 10,

            };


    }]);

    function getRandomValue(data) {
        var l = data.length,
            previous = l ? data[l - 1] : 50;
        var y = previous + Math.random() * 10 - 5;
        return y < 0 ? 0 : y > 100 ? 100 : y;
    }

})();

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

    app.controller('DashboardLineCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
        $scope.series = ['Page Views', 'Visitors'];
        $scope.data = [
            [123, 110, 113, 124, 112, 121, 119, 110, 124],
            [117, 113, 118, 110, 118, 111, 117, 119, 117]
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
                fillColor: "rgba(241,126,86,1)",
                strokeColor: "rgba(241,126,86,1)",
                pointColor: "rgba(241,126,86,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(241,126,86,1)"
        }, { // dark grey
                fillColor: "rgba(105,95,86,1)",
                strokeColor: "rgba(105,95,86,1.0)",
                pointColor: "rgba(105,95,86,1.0)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(105,95,86,1.0)"
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
        $scope.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
        $scope.series = ['Page Views', 'Visitors'];
        $scope.data = [
            [23, 12, 16, 28, 10, 21, 19, 12, 24],
            [7, 13, 8, 10, 18, 11, 17, 9, 17]
        ];
        $scope.colours = [{ // grey
                fillColor: "rgba(241,126,86,1)",
                strokeColor: "rgba(241,126,86,1)",
                highlightFill: "rgba(241,126,86,1)",
                highlightStroke: "rgba(241,126,86,1)"
        }, { // dark grey
                fillColor: "rgba(105,95,86,1.0)",
                strokeColor: "rgba(105,95,86,1)",
                highlightFill: "rgba(105,95,86,1)",
                highlightStroke: "rgba(105,95,86,1.0)"
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
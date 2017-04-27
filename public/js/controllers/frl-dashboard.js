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



    app.controller('DashboardRadarCtrl', function($scope) {
        $scope.labels = ['Finance', 'Marketing', 'Hosting', 'Designing', 'Coding', 'Networking', 'Pricing'];

        $scope.data = [
            [65, 59, 90, 81, 56, 55, 40],
            [28, 48, 40, 19, 96, 27, 100]
        ];

        $scope.onClick = function(points, evt) {
            console.log(points, evt);
        };
        $scope.colours = [{ // grey
                fillColor: "rgba(84,188,151,0.9)",
                strokeColor: "rgba(84,188,151,1)",
                pointColor: "rgba(84,188,151,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(84,188,151,1)"
        }, { // dark grey
                fillColor: "rgba(0,121,124,0.9)",
                strokeColor: "rgba(0,121,124,1.0)",
                pointColor: "rgba(0,121,124,1.0)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(0,121,124,1.0)"
        }];



         $scope.options = {
                scaleShowVerticalLines: false,
                scaleShowLabels: false,
                scaleLineWidth: 1,
                scaleLineColor: "rgba(0,0,0,0.1)",
                scaleShowHorizontalLines: false,
                scaleGridLineWidth : 1,
                scaleShowGridLines : false,
                scaleGridLineColor : "rgba(0,0,0,0)",
                pointDotRadius : 5,
                pointHitDetectionRadius : 10,

            };
    });


    function getRandomValue(data) {
        var l = data.length,
            previous = l ? data[l - 1] : 50;
        var y = previous + Math.random() * 10 - 5;
        return y < 0 ? 0 : y > 100 ? 100 : y;
    }

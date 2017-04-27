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



    app.controller('SalePassingCtrl', ['$scope', '$timeout', function($scope, $timeout) {
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
                fillColor: "#54bc97",
                strokeColor: "#54bc97",
                highlightFill: "#54bc97",
                highlightStroke: "#54bc97"
        }, { // dark grey
                fillColor: "#00797c",
                strokeColor: "#00797c",
                highlightFill: "#00797c",
                highlightStroke: "#00797c"
        }];

        $timeout(function() {
            $scope.options = {
                scaleShowVerticalLines: true
            };
        }, 3000);
    }]);


    app.controller('SaleSurveyCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        $scope.series = ['Quality of Products', 'Quality of Vendors','Quality of Delivery'];
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
                fillColor: "rgba(84,188,151,0.5)",
                strokeColor: "#54bc97",
                pointColor: "#54bc97",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#54bc97"
        }, { // dark grey
                fillColor: "rgba(0,121,124,0.5)",
                strokeColor: "#00797c",
                pointColor: "#00797c",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#00797c"
        }, { // dark grey
                fillColor: "rgba(253,180,93,0.5)",
                strokeColor: "#fdb45d",
                pointColor: "#fdb45d",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#fdb45d"
        }];


    }]);

    app.controller('SaleSatisfactionCtrl', ['$scope', '$timeout', function($scope, $timeout) {
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
                fillColor: "#54bc97",
                strokeColor: "#54bc97",
                highlightFill: "#54bc97",
                highlightStroke: "#54bc97"
        }, { // dark grey
                fillColor: "#00797c",
                strokeColor: "#00797c",
                highlightFill: "#00797c",
                highlightStroke: "#00797c"
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


    app.controller('SaleTestScoreCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        $scope.series = ['Buyers', 'Sellers'];
        $scope.data = [
                [165, 169, 170, 181, 76, 45, 150],
                [168, 160, 190, 189, 76, 157, 70]
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
                fillColor: "rgba(84,188,151,0)",
                strokeColor: "#54bc97",
                pointColor: "#54bc97",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#54bc97"
        }, { // dark grey
                fillColor: "rgba(0,121,124,0)",
                strokeColor: "#00797c",
                pointColor: "#00797c",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#00797c"
        }];


    }]);

    function getRandomValue(data) {
        var l = data.length,
            previous = l ? data[l - 1] : 50;
        var y = previous + Math.random() * 10 - 5;
        return y < 0 ? 0 : y > 100 ? 100 : y;
    }

})();

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
                fillColor: "#f17e56",
                strokeColor: "#f17e56",
                highlightFill: "#f17e56",
                highlightStroke: "#f17e56"
        }, { // dark grey
                fillColor: "#695f56",
                strokeColor: "#695f56",
                highlightFill: "#695f56",
                highlightStroke: "#695f56"
        }];

        $timeout(function() {
            $scope.options = {
                scaleShowVerticalLines: true
            };
        }, 3000);
    }]);


    app.controller('SiteSurveyCtrl', ['$scope', '$timeout', function($scope, $timeout) {
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
                fillColor: "rgba(241,126,86,0.5)",
                strokeColor: "#f17e56",
                pointColor: "#f17e56",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#f17e56"
        }, { // dark grey
                fillColor: "rgba(105,95,86,0.5)",
                strokeColor: "#695f56",
                pointColor: "#695f56",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#695f56"
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
                fillColor: "#f17e56",
                strokeColor: "#f17e56",
                highlightFill: "#f17e56",
                highlightStroke: "#f17e56"
        }, { // dark grey
                fillColor: "#695f56",
                strokeColor: "#695f56",
                highlightFill: "#695f56",
                highlightStroke: "#695f56"
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
        $scope.series = ['Vendors', 'Customers'];
        $scope.data = [
                [65, 69, 70, 81, 76, 45, 50],
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
                fillColor: "rgba(241,126,86,0)",
                strokeColor: "#f17e56",
                pointColor: "#f17e56",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#f17e56"
        }, { // dark grey
                fillColor: "rgba(105,95,86,0)",
                strokeColor: "#695f56",
                pointColor: "#695f56",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#695f56"
        }];


    }]);

    function getRandomValue(data) {
        var l = data.length,
            previous = l ? data[l - 1] : 50;
        var y = previous + Math.random() * 10 - 5;
        return y < 0 ? 0 : y > 100 ? 100 : y;
    }

})();

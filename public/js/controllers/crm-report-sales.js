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



    app.controller('CustomersLeadsCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.options = {
            scaleShowVerticalLines: false
        };
        $scope.labels = ['2006', '2007', '2008','2009', '2010', '2011', '2012', '2013', '2014', '2015'];
        $scope.series = ['Series A', 'Series B'];
        $scope.data = [
            [4500, 5100, 5000, 6100, 1600, 3500, 4500,5100, 5000, 6100],
            [7800, 8800, 3000, 4900, 5600, 6000, 3000,8800, 3000, 4900]
        ];
        $scope.colours = [{ // grey
                fillColor: "#568c98",
                strokeColor: "#568c98",
                highlightFill: "#568c98",
                highlightStroke: "#568c98"
        }, { // dark grey
                fillColor: "#ec8e72",
                strokeColor: "#ec8e72",
                highlightFill: "#ec8e72",
                highlightStroke: "#ec8e72"
        }];

        $timeout(function() {
            $scope.options = {
                scaleShowVerticalLines: true
            };
        }, 3000);
    }]);


    app.controller('MonthlySurveyCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        $scope.series = ['Quality of Service', 'Quality of Communication','Quality of Accounting'];
        $scope.data = [
                [138, 148, 90, 179, 86, 97, 110],
                [145, 89, 80, 181, 76, 75, 80],
                [158, 90, 90, 69, 176, 157, 80]
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
                fillColor: "rgba(86,140,152,0.5)",
                strokeColor: "#568c98",
                pointColor: "#568c98",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#568c98"
        }, { // dark grey
                fillColor: "rgba(236,142,114,0.5)",
                strokeColor: "#ec8e72",
                pointColor: "#ec8e72",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#ec8e72"
        }, { // dark grey
                fillColor: "rgba(253,180,93,0.5)",
                strokeColor: "#fdb45d",
                pointColor: "#fdb45d",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#fdb45d"
        }];

    }]);

    app.controller('CustomerSatisfactionCtrl', ['$scope', '$timeout', function($scope, $timeout) {
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
                fillColor: "#568c98",
                strokeColor: "#568c98",
                highlightFill: "#568c98",
                highlightStroke: "#568c98"
        }, { // dark grey
                fillColor: "#ec8e72",
                strokeColor: "#ec8e72",
                highlightFill: "#ec8e72",
                highlightStroke: "#ec8e72"
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


    app.controller('GrowthGraphCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        $scope.series = ['New Customers','New Contacts','New Vendors'];
        $scope.data = [
                [78, 68, 70, 89, 86, 97, 60],
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
                fillColor: "rgba(86,140,152,0)",
                strokeColor: "#568c98",
                pointColor: "#568c98",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#568c98"
        }, { // dark grey
                fillColor: "rgba(236,142,114,0)",
                strokeColor: "#ec8e72",
                pointColor: "#ec8e72",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#ec8e72"
        }, { // dark grey
                fillColor: "rgba(253,180,93,0)",
                strokeColor: "#fdb45d",
                pointColor: "#fdb45d",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#fdb45d"
        }];



    }]);

    function getRandomValue(data) {
        var l = data.length,
            previous = l ? data[l - 1] : 50;
        var y = previous + Math.random() * 10 - 5;
        return y < 0 ? 0 : y > 100 ? 100 : y;
    }

})();

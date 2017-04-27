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
        $scope.series = ['Marketing', 'Branding', 'Photoshop', 'Graphic Design', 'Web Design'];
        $scope.data = [
            [6800, 5900, 8000, 5100, 9600, 9500],
            [5800, 4900, 5000, 5100, 6600, 4500],
            [2700, 4900, 5000, 7900, 7200, 9700],
            [4800, 5900, 5000, 7100, 8600, 7500],
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
                fillColor: "rgba(93,123,247,0)",
                strokeColor: "#5d7bf7",
                pointColor: "#5d7bf7",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#5d7bf7"
        }, { // dark grey
                fillColor: "rgba(247,47,94,0)",
                strokeColor: "#f72f5e",
                pointColor: "#f72f5e",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#f72f5e"
        }, { // dark grey
                fillColor: "rgba(93,123,247,0)",
                strokeColor: "#fdd835",
                pointColor: "#fdd835",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#fdd835"
        }, { // dark grey
                fillColor: "rgba(247,47,94,0)",
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
        $scope.series = ['News Users', 'Registered Users'];
        $scope.data = [
            [4800, 7800, 5000, 7900, 5600, 7700],
            [5500, 6900, 3200, 5100, 5600, 4500],
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
                fillColor: "rgba(93,123,247,0.8)",
                strokeColor: "#5d7bf7",
                pointColor: "#5d7bf7",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#5d7bf7"
        }, { // dark grey
                fillColor: "rgba(247,47,94,0.8)",
                strokeColor: "#f72f5e",
                pointColor: "#f72f5e",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#f72f5e"
        }];

    }]);


    app.controller('VisitorCommunicationCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.options = {
            scaleShowVerticalLines: false
        };
        $scope.labels = ['April', 'May', 'June', 'July'];
        $scope.series = ['Visitor Communication', 'Visitor Listen Carefully','Visitors Treated with Respect/Courtesy','Visitors explained well to understand'];
        $scope.data = [
            [581, 580, 521, 946],
            [558, 660, 769, 846],
            [581, 680, 721, 746],
            [558, 760, 769, 846]
        ];
        $scope.colours = [ { // dark grey
                fillColor: "rgba(93,123,247,1.0)",
                strokeColor: "rgba(93,123,247,1.0)",
                highlightFill: "rgba(93,123,247,1.0)",
                highlightStroke: "rgba(93,123,247,1.0)"
        }, { // dark grey
                fillColor: "rgba(247,47,94,1.0)",
                strokeColor: "rgba(247,47,94,1.0)",
                highlightFill: "rgba(247,47,94,1.0)",
                highlightStroke: "rgba(247,47,94,1.0)"
        },{ // grey
                fillColor: "#46be8a",
                strokeColor: "#46be8a",
                highlightFill: "#46be8a",
                highlightStroke: "#46be8a"
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



    function getRandomValue(data) {
        var l = data.length,
            previous = l ? data[l - 1] : 50;
        var y = previous + Math.random() * 10 - 5;
        return y < 0 ? 0 : y > 100 ? 100 : y;
    }

})();

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




    app.controller('EcommerceBudgetCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.labels = ['2010', '2011', '2012', '2013', '2014', '2015'];
        $scope.series = ['$0-$100', '$100-$1000', '$1000-$5000', '$5000-$10000', '$10000-Above'];
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
                fillColor: "rgba(0,121,124,0)",
                strokeColor: "#00797c",
                pointColor: "#00797c",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#00797c"
        }, { // dark grey
                fillColor: "rgba(84,188,151,0)",
                strokeColor: "#54bc97",
                pointColor: "#54bc97",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#54bc97"
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


    app.controller('EcommerceAdmissionsCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.labels = ['2010', '2011', '2012', '2013', '2014', '2015'];
        $scope.series = ['Search Engine', 'Online Ads.', 'Social Media'];
        $scope.data = [
            [4800, 7800, 5000, 7900, 5600, 7700],
            [6500, 5900, 8000, 8100, 5600, 5500],
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
                fillColor: "rgba(0,121,124,0.8)",
                strokeColor: "#00797c",
                pointColor: "#00797c",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#00797c"
        }, { // dark grey
                fillColor: "rgba(84,188,151,0.8)",
                strokeColor: "#54bc97",
                pointColor: "#54bc97",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#54bc97"
        }, { // dark grey
                fillColor: "rgba(253,180,93,0.4)",
                strokeColor: "#fdd835",
                pointColor: "#fdd835",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#fdd835"
        }];

    }]);



    app.controller('ProfessorCommunicationCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.options = {
            scaleShowVerticalLines: false
        };
        $scope.labels = ['April', 'May', 'June', 'July'];
        $scope.series = ['Doctor Communication', 'Doctor Listen Carefully','Doctors Treated with Respect/Courtesy','Doctors explained well to understand'];
        $scope.data = [
            [581, 580, 521, 946],
            [558, 660, 769, 846],
            [581, 680, 721, 746],
            [558, 760, 769, 846]
        ];
        $scope.colours = [ { // dark grey
                fillColor: "rgba(253,180,93,1.0)",
                strokeColor: "rgba(253,180,93,1.0)",
                highlightFill: "rgba(253,180,93,1.0)",
                highlightStroke: "rgba(253,180,93,1.0)"
        }, { // dark grey
                fillColor: "rgba(76,175,80,1.0)",
                strokeColor: "rgba(76,175,80,1.0)",
                highlightFill: "rgba(76,175,80,1.0)",
                highlightStroke: "rgba(76,175,80,1.0)"
        },{ // grey
                fillColor: "#00797c",
                strokeColor: "#00797c",
                highlightFill: "#00797c",
                highlightStroke: "#00797c"
        }, { // dark grey
                fillColor: "#54bc97",
                strokeColor: "#54bc97",
                highlightFill: "#54bc97",
                highlightStroke: "#54bc97"
        }];

        $timeout(function() {
            $scope.options = {
                scaleShowVerticalLines: true
            };
        }, 3000);
    }]);



    app.controller('EcommerceStudentActivityCtrl', function($scope) {
        $scope.labels = ['Purchasing', 'Reviewing', 'Browsing', 'Sharing', 'Recommending', 'Selling'];

        $scope.data = [
            [65, 59, 90, 81, 56, 55],
            [45, 69, 60, 31, 76, 65]
        ];

        $scope.onClick = function(points, evt) {
            console.log(points, evt);
        };
        $scope.colours = [{ // grey
                fillColor: "rgba(0,121,124,0.8)",
                strokeColor: "#00797c",
                pointColor: "#00797c",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#00797c"
        }, { // dark grey
                fillColor: "rgba(84,188,151,0.8)",
                strokeColor: "#54bc97",
                pointColor: "#54bc97",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#54bc97"
        }, { // dark grey
                fillColor: "rgba(253,180,93,0.8)",
                strokeColor: "#fdb45d",
                pointColor: "#fdb45d",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#fdb45d"
        }];
    });


    function getRandomValue(data) {
        var l = data.length,
            previous = l ? data[l - 1] : 50;
        var y = previous + Math.random() * 10 - 5;
        return y < 0 ? 0 : y > 100 ? 100 : y;
    }

})();

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



    app.controller('CostEffectiveCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.options = {
            scaleShowVerticalLines: false
        };
        $scope.labels = ['2009', '2010', '2011', '2012', '2013', '2014', '2015'];
        $scope.series = ['Series A', 'Series B'];
        $scope.data = [
            [45000, 51000, 50000, 61000, 16000, 35000, 45000],
            [78000, 88000, 30000, 49000, 56000, 67000, 30000]
        ];
        $scope.colours = [{ // grey
                fillColor: "#4f5f6f",
                strokeColor: "#4f5f6f",
                highlightFill: "#4f5f6f",
                highlightStroke: "#4f5f6f"
        }, { // dark grey
                fillColor: "#59c2e6",
                strokeColor: "#59c2e6",
                highlightFill: "#59c2e6",
                highlightStroke: "#59c2e6"
        }];

        $timeout(function() {
            $scope.options = {
                scaleShowVerticalLines: true
            };
        }, 3000);
    }]);

    app.controller('PatientSatisfactionCtrl', ['$scope', '$timeout', function($scope, $timeout) {
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
                fillColor: "#4f5f6f",
                strokeColor: "#4f5f6f",
                highlightFill: "#4f5f6f",
                highlightStroke: "#4f5f6f"
        }, { // dark grey
                fillColor: "#59c2e6",
                strokeColor: "#59c2e6",
                highlightFill: "#59c2e6",
                highlightStroke: "#59c2e6"
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




    app.controller('PatientSurveyCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        $scope.series = ['Quality of Service', 'Would Recommend Our Service'];
        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
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
                fillColor: "rgba(79,95,111,0.5)",
                strokeColor: "#4f5f6f",
                pointColor: "#4f5f6f",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#4f5f6f"
        }, { // dark grey
                fillColor: "rgba(89,194,230,0.5)",
                strokeColor: "#59c2e6",
                pointColor: "#59c2e6",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#59c2e6"
        }];

        $timeout(function() {
            $scope.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
            $scope.data = [
                [78, 88, 90, 79, 86, 97, 90],
                [85, 89, 80, 81, 76, 75, 80]
            ];
            $scope.series = ['Quality of Service', 'Would Recommend Our Service'];
        }, 3000);
    }]);


    app.controller('PatientActivityCtrl', function($scope) {
        $scope.labels = ['Eating', 'Drinking', 'Sleeping', 'Walking', 'Cycling', 'Running', 'Working'];

        $scope.data = [
            [65, 59, 90, 81, 56, 55, 40],
            [28, 48, 40, 19, 96, 27, 100]
        ];

        $scope.onClick = function(points, evt) {
            console.log(points, evt);
        };
        $scope.colours = [{ // grey
                fillColor: "rgba(79,95,111,0.5)",
                strokeColor: "#4f5f6f",
                pointColor: "#4f5f6f",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#4f5f6f"
        }, { // dark grey
                fillColor: "rgba(89,194,230,0.5)",
                strokeColor: "#59c2e6",
                pointColor: "#59c2e6",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#59c2e6"
        }];
    });

    app.controller('PatientCountCtrl', function($scope) {
        $scope.labels = ['Inpatient discharges', 'Day Cases', 'ED Admissions', 'Referral Cases', 'Outpatient Cases'];
        $scope.data = [300, 500, 100, 40, 120];
        $scope.type = 'PolarArea';

        $scope.toggle = function() {
            $scope.type = $scope.type === 'PolarArea' ? 'Pie' : 'PolarArea';
        };
        $scope.colours = [{ // grey
                fillColor: "#4f5f6f",
                strokeColor: "#4f5f6f",
                highlightFill: "#4f5f6f",
                highlightStroke: "#4f5f6f"
        }, { // dark grey
                fillColor: "#59c2e6",
                strokeColor: "#59c2e6",
                highlightFill: "#59c2e6",
                highlightStroke: "#59c2e6"
        }, { // dark grey
                fillColor: "rgba(253,180,93,1.0)",
                strokeColor: "rgba(253,180,93,1.0)",
                highlightFill: "rgba(253,180,93,1.0)",
                highlightStroke: "rgba(253,180,93,1.0)"
        }, { // dark grey
                fillColor: "rgba(76,175,80,1.0)",
                strokeColor: "rgba(76,175,80,1.0)",
                highlightFill: "rgba(76,175,80,1.0)",
                highlightStroke: "rgba(76,175,80,1.0)"
        }, { // dark grey
                fillColor: "rgba(244,67,54,1.0)",
                strokeColor: "rgba(244,67,54,1.0)",
                highlightFill: "rgba(244,67,54,1.0)",
                highlightStroke: "rgba(244,67,54,1.0)"
        }];
    });


    app.controller('GenderCountCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.labels = ['Male Adults', 'Female Adults', 'Children', 'Senior Citizens'];
        $scope.data = [0, 0, 0,0];
        $scope.colours = [{ // grey
                fillColor: "#4f5f6f",
                strokeColor: "#4f5f6f",
                highlightFill: "#4f5f6f",
                highlightStroke: "#4f5f6f"
        }, { // dark grey
                fillColor: "#59c2e6",
                strokeColor: "#59c2e6",
                highlightFill: "#59c2e6",
                highlightStroke: "#59c2e6"
        }, { // dark grey
                fillColor: "rgba(76,175,80,1.0)",
                strokeColor: "rgba(76,175,80,1.0)",
                highlightFill: "rgba(76,175,80,1.0)",
                highlightStroke: "rgba(76,175,80,1.0)"
        }, { // dark grey
                fillColor: "rgba(253,180,93,1.0)",
                strokeColor: "rgba(253,180,93,1.0)",
                highlightFill: "rgba(253,180,93,1.0)",
                highlightStroke: "rgba(253,180,93,1.0)"
        }];

        $timeout(function() {
            $scope.data = [450, 550, 100,123];
        }, 500);
    }]);


    function getRandomValue(data) {
        var l = data.length,
            previous = l ? data[l - 1] : 50;
        var y = previous + Math.random() * 10 - 5;
        return y < 0 ? 0 : y > 100 ? 100 : y;
    }

})();

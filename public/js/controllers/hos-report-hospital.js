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




    app.controller('HospitalBudgetCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.labels = ['2010', '2011', '2012', '2013', '2014', '2015'];
        $scope.series = ['Public Health Budget', 'Staffing', 'Inpatient discharges', 'ED Admissions', 'Outpatient Attendance', 'Day Cases'];
        $scope.data = [
            [6500, 5900, 8000, 8100, 5600, 5500],
            [4800, 7800, 5000, 7900, 5600, 7700],
            [5500, 6900, 3000, 5100, 5600, 4500],
            [2800, 4800, 4000, 1900, 8200, 5700],
            [4500, 5900, 4000, 8100, 5600, 7500],
            [5800, 6400, 8000, 3900, 7600, 6700]
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
                fillColor: "rgba(79,95,111,0)",
                strokeColor: "#4f5f6f",
                pointColor: "#4f5f6f",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#4f5f6f"
        }, { // dark grey
                fillColor: "rgba(89,194,230,0)",
                strokeColor: "#59c2e6",
                pointColor: "#59c2e6",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#59c2e6"
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


    app.controller('HospitalAdmissionsCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.labels = ['2010', '2011', '2012', '2013', '2014', '2015'];
        $scope.series = ['Inpatient', 'Emergency', 'Outpatient'];
        $scope.data = [
            [6500, 5900, 8000, 8100, 5600, 5500],
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
                fillColor: "rgba(79,95,111,0.5)",
                strokeColor: "#4f5f6f",
                pointColor: "#4f5f6f",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#4f5f6f"
        }, { // dark grey
                fillColor: "rgba(89,194,230,0.4)",
                strokeColor: "#59c2e6",
                pointColor: "#59c2e6",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#59c2e6"
        }, { // dark grey
                fillColor: "rgba(253,180,93,0.2)",
                strokeColor: "#fdd835",
                pointColor: "#fdd835",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#fdd835"
        }];

    }]);

    app.controller('CostPerPatientPerDayCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.options = {
            scaleShowVerticalLines: false
        };
        $scope.labels = ['2009', '2010', '2011', '2012', '2013', '2014', '2015'];
        $scope.series = ['Cost Per Day (USD)', 'Cost Per Stay (USD)'];
        $scope.data = [
            [3000, 4500, 6000, 8100, 9500, 11000, 13000],
            [68000, 70000, 76000, 79000, 86000, 87000, 90000]
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

    app.controller('DeptAdmissionsCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.options = {
            scaleShowVerticalLines: false
        };
        $scope.labels = ['2011', '2012', '2013', '2014', '2015'];
        $scope.series = ['Inpatient Admissions', 'Equivalent Admissions',];
        $scope.data = [
            [181, 180, 221, 246, 265],
            [458, 560, 669, 746, 897],
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


    app.controller('DoctorCommunicationCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.options = {
            scaleShowVerticalLines: false
        };
        $scope.labels = ['April', 'May', 'June', 'July'];
        $scope.series = ['Doctor Communication', 'Doctor Listen Carefully','Doctors Treated with Respect/Courtesy','Doctors explained well to understand'];
        $scope.data = [
            [181, 380, 521, 946],
            [258, 460, 669, 846],
            [381, 480, 621, 746],
            [258, 460, 669, 846]
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



    app.controller('DoctorActivityCtrl', function($scope) {
        $scope.labels = ['Eating', 'Drinking', 'Sleeping', 'Walking', 'Cycling', 'Running', 'Working'];

        $scope.data = [
            [65, 59, 90, 81, 56, 55, 40],
            [45, 69, 60, 31, 76, 65, 80],
            [28, 48, 40, 19, 96, 27, 90]
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
        }, { // dark grey
                fillColor: "rgba(253,180,93,0.5)",
                strokeColor: "#fdb45d",
                pointColor: "#fdb45d",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#fdb45d"
        }];
    });

    app.controller('HospitalGenderCountCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.labels = ['Male Adults', 'Female Adults', 'Senior Citizens'];
        $scope.data = [0, 0, 0];
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

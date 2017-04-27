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
            [23, 10, 13, 24, 12, 21, 19, 10, 24],
            [7, 13, 8, 10, 18, 11, 17, 9, 17]
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
                fillColor: "rgba(255,110,64,1)",
                strokeColor: "rgba(255,110,64,1)",
                pointColor: "rgba(255,110,64,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(255,110,64,1)"
        }, { // dark grey
                fillColor: "rgba(103,58,183,1)",
                strokeColor: "rgba(103,58,183,1.0)",
                pointColor: "rgba(103,58,183,1.0)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(103,58,183,1.0)"
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
                fillColor: "rgba(255,110,64,1)",
                strokeColor: "rgba(255,110,64,1)",
                highlightFill: "rgba(255,110,64,1)",
                highlightStroke: "rgba(255,110,64,1)"
        }, { // dark grey
                fillColor: "rgba(103,58,183,1.0)",
                strokeColor: "rgba(103,58,183,1)",
                highlightFill: "rgba(103,58,183,1)",
                highlightStroke: "rgba(103,58,183,1.0)"
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

    app.controller('DashboardPolarAreaCtrl', function($scope) {
        $scope.labels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        $scope.data = [300, 500, 100, 40, 120];
        $scope.colours = [{ // grey
                fillColor: "rgba(255,110,64,1)",
                strokeColor: "rgba(255,110,64,1)",
                highlightFill: "rgba(255,110,64,1)",
                highlightStroke: "rgba(255,110,64,1)"
        }, { // dark grey
                fillColor: "rgba(103,58,183,1.0)",
                strokeColor: "rgba(103,58,183,1)",
                highlightFill: "rgba(103,58,183,1)",
                highlightStroke: "rgba(103,58,183,1.0)"
        }, { // dark grey
                fillColor: "rgba(253,216,53,1.0)",
                strokeColor: "rgba(253,216,53,1)",
                highlightFill: "rgba(253,216,53,1)",
                highlightStroke: "rgba(253,216,53,1.0)"
        }, { // dark grey
                fillColor: "rgba(76,175,80,1.0)",
                strokeColor: "rgba(76,175,80,1)",
                highlightFill: "rgba(76,175,80,1)",
                highlightStroke: "rgba(76,175,80,1.0)"
        }, { // dark grey
                fillColor: "rgba(244,67,54,1.0)",
                strokeColor: "rgba(244,67,54,1)",
                highlightFill: "rgba(244,67,54,1)",
                highlightStroke: "rgba(244,67,54,1.0)"
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
                fillColor: "rgba(255,110,64,0.9)",
                strokeColor: "rgba(255,110,64,1)",
                pointColor: "rgba(255,110,64,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(255,110,64,1)"
        }, { // dark grey
                fillColor: "rgba(103,58,183,0.9)",
                strokeColor: "rgba(103,58,183,1.0)",
                pointColor: "rgba(103,58,183,1.0)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(103,58,183,1.0)"
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

// jVectorMap controller
app.controller('JVectorMapDemoCtrl', ['$scope', function($scope) {
    $scope.world_markers = [
      {latLng: [41.90, 12.45], name: 'Vatican City'},
      {latLng: [43.73, 7.41], name: 'Monaco'},
      {latLng: [-0.52, 166.93], name: 'Nauru'},
      {latLng: [-8.51, 179.21], name: 'Tuvalu'},
      {latLng: [43.93, 12.46], name: 'San Marino'},
      {latLng: [47.14, 9.52], name: 'Liechtenstein'},
      {latLng: [7.11, 171.06], name: 'Marshall Islands'},
      {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
      {latLng: [3.2, 73.22], name: 'Maldives'},
      {latLng: [35.88, 14.5], name: 'Malta'},
      {latLng: [12.05, -61.75], name: 'Grenada'},
      {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
      {latLng: [13.16, -59.55], name: 'Barbados'},
      {latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
      {latLng: [-4.61, 55.45], name: 'Seychelles'},
      {latLng: [7.35, 134.46], name: 'Palau'},
      {latLng: [42.5, 1.51], name: 'Andorra'},
      {latLng: [14.01, -60.98], name: 'Saint Lucia'},
      {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
      {latLng: [1.3, 103.8], name: 'Singapore'},
      {latLng: [1.46, 173.03], name: 'Kiribati'},
      {latLng: [-21.13, -175.2], name: 'Tonga'},
      {latLng: [15.3, -61.38], name: 'Dominica'},
      {latLng: [-20.2, 57.5], name: 'Mauritius'},
      {latLng: [26.02, 50.55], name: 'Bahrain'},
      {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
    ];

    $scope.usa_markers = [
      {latLng: [40.71, -74.00], name: 'New York'},
      {latLng: [34.05, -118.24], name: 'Los Angeles'},
      {latLng: [41.87, -87.62], name: 'Chicago'},
      {latLng: [29.76, -95.36], name: 'Houston'},
      {latLng: [39.95, -75.16], name: 'Philadelphia'},
      {latLng: [38.90, -77.03], name: 'Washington'},
      {latLng: [37.36, -122.03], name: 'Silicon Valley'}
    ];
  }])
;
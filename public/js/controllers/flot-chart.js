'use strict';

/* Controllers */

app.controller('FlotChartCtrl', ['$scope', function($scope) {
    $scope.chart1 = [ [1,8.5],[2,5.5],[3,8],[4,4],[5,4.5],[6,6],[7,6.8],[8,8],[9,5.2],[10,8],[11,8.8],[12,5] ];

    $scope.chart2 = [ [0,8],[1,4.5],[2,15.5],[3,3],[4,4],[5,8],[6,1],[7,8.5],[8,4],[9,9] ];

    $scope.chart3 = [ [0,5],[1,7.5],[2,4],[3,6.5],[4,7],[5,3.5],[6,4],[7,9],[8,3],[9,8] ];

    $scope.chart4_1 = [ [10, 80], [20, 120], [30, 50], [40, 90] ];

    $scope.chart4_2 = [ [10, 60],  [20, 80], [30, 50],  [40, 45] ];

    $scope.chart4_3 = [ [10, 50],  [20, 80], [30, 70],  [40, 90] ];


    $scope.chart5 = [ 
      { label: "Samsung", data: 40 }, 
      { label: "Apple", data: 10 },
      { label: "Dell", data: 20 },
      { label: "HP", data: 12 },
      { label: "Lenovo", data: 18 }
    ];


  }]);
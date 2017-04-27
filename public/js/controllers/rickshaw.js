/**
 */

'use strict';

app.controller('RickshawCtrl', ['$scope', '$interval', function($scope, $interval) {
        $scope.renderers = [{
                id: 'area',
                name: 'Area'
            }, {
                id: 'line',
                name: 'Line'
            }, {
                id: 'bar',
                name: 'Bar'
            }, {
                id: 'scatterplot',
                name: 'Scatterplot'
            }];
        $scope.palettes = [
            'spectrum14',
            'spectrum2000',
            'spectrum2001',
            'colorwheel',
            'cool',
            'classic9',
            'munin'
        ];
        $scope.xAxes = [
            'none',
            'numeric',
            'decade',
            'year',
            'month',
            'week',
            'day',
            '6 hour',
            'hour',
            '15 minute',
            'minute',
            '15 second',
            'second',
            'decisecond',
            'centisecond'
        ];
        $scope.yAxes = [
            'none',
            'formatKMBT',
            'formatBase1024KMGTP'
        ];

        $scope.rendererChanged = function(id) {
            if (!$scope['options' + id]) {
                $scope['options' + id] = {};
            }
            $scope['options' + id].renderer = $scope['renderer' + id].id;
        };

        $scope.paletteChanged = function(id) {
            if (!$scope['features' + id]) {
                $scope['features' + id] = {};
            }
            $scope['features' + id].palette = $scope['palette' + id];
        };
        
        $scope.legendChanged = function(id) {
            if (!$scope['features' + id]) {
                $scope['features' + id] = {};
            }
            if ($scope['legend' + id]) {
                $scope['features' + id].legend = {
                    toggle: true,
                    highlight: true
                };
            }
            else {
                delete $scope['features' + id].legend;
            }
        };
        
        $scope.xAxisChanged = function(id) {
            if (!$scope['features' + id]) {
                $scope['features' + id] = {};
            }
            var xAxis = $scope['xAxis' + id];
            if (xAxis) {
                if (xAxis === 'none') {
                    delete $scope['features' + id].xAxis;
                }
                else if (xAxis === 'numeric') {
                    $scope['features' + id].xAxis = {
                    };
                }
                else {
                    $scope['features' + id].xAxis = {
                        timeUnit: xAxis
                    };
                }
            }
            else {
                delete $scope['features' + id].xAxis;
            }
            $scope['xAxisDisabled' + id] = true;
        };

        $scope.yAxisChanged = function(id) {
            if (!$scope['features' + id]) {
                $scope['features' + id] = {};
            }
            var yAxis = $scope['yAxis' + id];
            if (yAxis) {
                if (yAxis === 'none') {
                    delete $scope['features' + id].yAxis;
                }
                else {
                    $scope['features' + id].yAxis = {
                        tickFormat: yAxis
                    };
                }
            }
            else {
                delete $scope['features' + id].xAxis;
            }
            $scope['yAxisDisabled' + id] = true;
        };

        $scope.changeSeriesData = function(id) {
            var seriesList = [];
            for (var i = 0; i < 3; i++) {
                var series = {
                    name: 'Series ' + (i + 1),
                    data: []
                };
                for (var j = 0; j < 10; j++) {
                    series.data.push({x: j * 900, y: Math.random() * 10000});
                }
                seriesList.push(series);
            }
            $scope['series' + id] = seriesList;
        };

        $scope.options1 = {
            renderer: 'area'
        };
        $scope.series1 = [{
                name: 'Series 1',
                color: '#673AB7',
                data: [{x: 0, y: 23}, {x: 1, y: 15}, {x: 2, y: 79}, {x: 3, y: 31}, {x: 4, y: 60}]
            }, {
                name: 'Series 2',
                color: '#FF6E40',
                data: [{x: 0, y: 30}, {x: 1, y: 20}, {x: 2, y: 64}, {x: 3, y: 50}, {x: 4, y: 15}]
            }];

        $scope.options2 = {
            renderer: 'line'
        };
        $scope.features2 = {
            hover: {
                xFormatter: function(x) {
                    return 't=' + x;
                },
                yFormatter: function(y) {
                    return '$' + y;
                }
            }
        };
        $scope.series2 = [{
                name: 'Series 1',
                color: '#673AB7',
                data: [{x: 0, y: 23}, {x: 1, y: 15}, {x: 2, y: 79}, {x: 3, y: 31}, {x: 4, y: 60}]
            }, {
                name: 'Series 2',
                color: '#FF6E40',
                data: [{x: 0, y: 30}, {x: 1, y: 20}, {x: 2, y: 64}, {x: 3, y: 50}, {x: 4, y: 15}]
            }];

        $scope.options3 = {
            renderer: 'bar'
        };
        $scope.features3 = {
            palette: 'colorwheel'
        };
        $scope.series3 = [{
                name: 'Series 1',
                data: [{x: 0, y: 23}, {x: 1, y: 15}, {x: 2, y: 79}, {x: 3, y: 31}, {x: 4, y: 60}]
            }, {
                name: 'Series 2',
                data: [{x: 0, y: 30}, {x: 1, y: 20}, {x: 2, y: 64}, {x: 3, y: 50}, {x: 4, y: 15}]
            }];

        $scope.options4 = {
            renderer: 'bar'
        };
        $scope.features4 = {
            xAxis: {
                timeUnit: 'hour'
            }
        };
        $scope.series4 = [{
                name: 'Series 1',
                color: '#673AB7',
                data: [{x: 0 * 60, y: 230}, {x: 30 * 60, y: 1500}, {x: 60 * 60, y: 790}, {x: 90 * 60, y: 310}, {x: 120 * 60, y: 600}]
            }, {
                name: 'Series 2',
                color: '#FF6E40',
                data: [{x: 0 * 60, y: 300}, {x: 30 * 60, y: 2000}, {x: 60 * 60, y: 640}, {x: 90 * 60, y: 500}, {x: 120 * 60, y: 150}]
            }];

        $scope.options5 = {
            renderer: 'bar'
        };
        $scope.features5 = {
            yAxis: {
                tickFormat: 'formatKMBT'
            }
        };
        $scope.series5 = [{
                name: 'Series 1',
                color: '#673AB7',
                data: [{x: 0, y: 230}, {x: 1, y: 1500}, {x: 2, y: 790}, {x: 3, y: 310}, {x: 4, y: 600}]
            }, {
                name: 'Series 2',
                color: '#FF6E40',
                data: [{x: 0, y: 300}, {x: 1, y: 2000}, {x: 2, y: 640}, {x: 3, y: 500}, {x: 4, y: 150}]
            }];

        $scope.options6 = {
            renderer: 'line'
        };
        $scope.features6 = {
            legend: {
                toggle: true,
                highlight: true
            }
        };
        $scope.series6 = [{
                name: 'Series 1',
                color: '#673AB7',
                data: [{x: 0, y: 230}, {x: 1, y: 1500}, {x: 2, y: 790}, {x: 3, y: 310}, {x: 4, y: 600}]
            },
            {
                name: 'Series 2',
                color: '#FF6E40',
                data: [{x: 0, y: 300}, {x: 1, y: 2000}, {x: 2, y: 640}, {x: 3, y: 500}, {x: 4, y: 150}]
            }];

        $scope.series0 = [];

        $scope.options0 = {
            renderer: 'area'
        };
        $scope.renderer0 = $scope.renderers[0];
        $scope.palette0 = $scope.palettes[0];
        $scope.xAxis0 = 'none';
        $scope.yAxis0 = 'none';
        $scope.xAxisDisabled0 = false;
        $scope.yAxisDisabled0 = false;

        $scope.rendererChanged(0);
        $scope.paletteChanged(0);
        $scope.changeSeriesData(0);

        $scope.options100 = {
            renderer: 'line'
        };
        $scope.features100 = {
            xAxis: {
            },
            yAxis: {
                tickFormat: 'formatKMBT'
            }
        };
        $scope.series100 = [{
                name: 'Series 1',
                color: '#673AB7',
                data: []
            }, {
                name: 'Series 2',
                color: '#FF6E40',
                data: []
            }];
        $scope.x100 = 0;

        $scope.toggleRandomSeries = function(id) {
            $scope['random' + id] = !$scope['random' + id];
            if ($scope['random' + id]) {
                $scope['interval' + id] = $interval(function() {
                    var x = $scope['x' + id];
                    var series = $scope['series' + id];
                    for (var i = 0; i < series.length; i++) {
                        var name = series[i].name;
                        var color = series[i].color;
                        var data = series[i].data;
                        data.push({x: x, y: Math.random() * 10000});
                        series[i] = {
                            name: name,
                            color: color,
                            data: data
                        };
                    }
                    x++;
                    $scope['x' + id] = x;
                }, 1000);
            }
            else {
                $interval.cancel($scope['interval' + id]);
            }
        };
    }]);
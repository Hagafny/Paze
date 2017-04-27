'use strict';

app.controller('ColorPickerCtrl', [
    '$scope',
    function ($scope) {
        $scope.hexPicker = { color: '' };
        $scope.rgbPicker = { color: '' };
        $scope.rgbaPicker = { color: '' };
        $scope.nonInput = { color: '' };
        $scope.resetColor = function () {
            $scope.hexPicker = { color: '#ff0000' };
        };
        $scope.resetRBGColor = function () {
            $scope.rgbPicker = { color: 'rgb(255,0,0)' };
        };
        $scope.resetRBGAColor = function () {
            $scope.rgbaPicker = { color: 'rgba(255,0,0, 0.25)' };
        };
        $scope.resetNonInputColor = function () {
            $scope.nonInput = { color: '#ffffff' };
        };
    }
]);
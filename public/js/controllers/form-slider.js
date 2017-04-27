app.controller('FormSliderCtrl', function($scope) {

		$scope.scopes = [];
		    $scope.value = 5;
		    $scope.values = {
			    low : 4,
			    high: 7
		    };
		    $scope.scale = function(value) {
			    return Math.pow(value, 3);
		    };
		    $scope.inverseScale = function(value) {
			    var sign = value == 0?1:(value / Math.abs(value));
			    return sign * Math.pow(Math.abs(value), 1 / 3);
		    };
		    $scope.addScope = function() {
			    $scope.scopes.push({
				    values: {
					    low : 4,
					    high: 7
				    },
				    value : 5
			    });
		    };
		    $scope.translate = function(value) {
			    return '$' + value;
		    };
		    $scope.translateCombined = function(low, high) {
			    return $scope.translate(low.toFixed($scope.precision)) + " *** " + $scope.translate(high.toFixed($scope.precision));
		    };
		    $scope.translateRange = function(low, high) {
			    return $scope.translate((high - low).toFixed($scope.precision));
		    };
		    $scope.fireResizeEvent = function() {
			    $scope.$broadcast('refreshSlider');
		    };






});
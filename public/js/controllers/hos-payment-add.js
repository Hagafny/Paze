app.controller('HospitalPaymentAddCtrl', ['$scope', '$filter', '$http', 'editableOptions', 'editableThemes', 
  function($scope, $filter, $http, editableOptions, editableThemes){
    editableThemes.bs3.inputClass = 'input-sm';
    editableThemes.bs3.buttonsClass = 'btn-sm';
    editableOptions.theme = 'bs3';

    // editable table
    $scope.charges = [
      {id: 1, title: 'Special Room', details: '', rate: 123.00, qty: 1, amount: 123.00},
      {id: 2, title: 'Operation Charge', details: '', rate: 617.00, qty: 1, amount: 617.00},
      {id: 3, title: 'Theatre Charge', details: '', rate: 2424.00, qty: 1, amount: 2424.00},
      {id: 4, title: 'Assistant Charge', details: '', rate: 623.00, qty: 2, amount: 1246.00},
      {id: 5, title: 'Implant Charge', details: '', rate: 428.00, qty: 1, amount: 428.00},
    ];


    $scope.saveUser = function(data, id) {
      //$scope.charge not updated yet
      angular.extend(data, {id: id});
      // return $http.post('data/saveUser', data);
    };

    // remove charge
    $scope.removeUser = function(index) {
      $scope.charges.splice(index, 1);
    };

    // add charge
    $scope.addUser = function() {
      $scope.inserted = {
        id: $scope.charges.length+1,
        title: '',
      };
      $scope.charges.push($scope.inserted);
    };

}]);

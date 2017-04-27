app.controller('MailCtrl', ['$scope', function($scope) {
  $scope.folds = [
    {name: 'Inbox', filter:'', icon:'fa-inbox', badge:'primary', count: '6'},
    {name: 'Sent', filter:'sent', icon:'fa-send-o', badge: '', count: ''},
    {name: 'Important', filter:'important', icon:'fa-star-o', badge: '', count: ''},
    {name: 'Draft', filter:'draft', icon:'fa-edit', badge:'accent', count: '2'},
    {name: 'Trash', filter:'trash', icon:'fa-trash-o', badge: '', count: ''}
  ];

  $scope.labels = [
    {name: 'Urgent', filter:'urgent', color:'danger'},
    {name: 'Market', filter:'market', color:'warning'},
    {name: 'Family', filter:'family', color:'success'},
    {name: 'Work', filter:'work', color:'info'}
  ];

  $scope.addLabel = function(){
    $scope.labels.push(
      {
        name: $scope.newLabel.name,
        filter: angular.lowercase($scope.newLabel.name),
        color: 'secondary'
      }
    );
    $scope.newLabel.name = '';
  }

  $scope.labelClass = function(label) {
    if(angular.lowercase(label) === 'urgent'){ return 'danger'; }
    else if(angular.lowercase(label) === 'market'){ return 'primary'; }
    else if(angular.lowercase(label) === 'family'){ return 'success'; }
    else if(angular.lowercase(label) === 'work'){ return 'accent'; }
    else{ return 'secondary'; }
  };

}]);

app.controller('MailListCtrl', ['$scope', 'mails', '$stateParams', function($scope, mails, $stateParams) {
  $scope.fold = $stateParams.fold;
  mails.all().then(function(mails){
    $scope.mails = mails;
  });
}]);

app.controller('MailDetailCtrl', ['$scope', 'mails', '$stateParams', function($scope, mails, $stateParams) {
  mails.get($stateParams.mailId).then(function(mail){
    $scope.mail = mail;
  })
}]);

app.controller('MailNewCtrl', ['$scope', function($scope) {
  $scope.mail = {
    to: '',
    subject: '',
    content: ''
  }
  $scope.tolist = [
    {name: 'James', email:'james@gmail.com'},
    {name: 'Luoris Kiso', email:'luoris.kiso@hotmail.com'},
    {name: 'Lucy Yokes', email:'lucy.yokes@gmail.com'}
  ];
}]);

angular.module('app').directive('labelColor', function(){
  return function(scope, $el, attrs){
    $el.css({'color': attrs.color});
  }
});
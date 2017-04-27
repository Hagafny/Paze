/* ------------------------------
   ui search page tabs
--------------------------------*/

angular.module('app')
  .directive('uiSearchtabs', ['$timeout', function($timeout) {
    return {
      restrict: 'AC',
      link: function(scope, el, attr) {

        el.on('click', '.search_data .nav-tabs li a', function(e) {
          $(".search_data .nav-tabs li a").removeClass("active");
          $(this).addClass("active");
        });

      }
    };
  }]);


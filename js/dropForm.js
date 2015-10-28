angular.module('dropForm', [])
  .directive('dropForm', function(){

    return{
      restrict:'AE',
      templateUrl:'drop-form.html',

      link: function(scope, elem, attr){
        var dropButton = angular.element(document.querySelector('#dropButton'));
      }
    }

  });


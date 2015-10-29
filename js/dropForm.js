angular.module('dropForm', [])
  .directive('dropForm', function(){

    return{
      scope:true,
      restrict:'AE',
      templateUrl:'drop-form.html',
      require:'ngModel',

      link: function(scope, elem, attr, ngModel){

        var dropButton = angular.element(document.querySelector('#drop-button'));

        var dropForm = angular.element(document.querySelector('#drop-form'));

        var peek = angular.element(document.querySelector('.peek'))

        scope.dropped = false;

        scope.toggleForm = function(){
          if(scope.dropped == false){
             scope.dropped = true;
             // dropForm.css({ 'transform' : 'translateY(0px)'});
          }else{
            scope.dropped = false;
            // dropForm.css({'transform' : 'translateY(-200px)'});

          }
        }
      }
    }
  });



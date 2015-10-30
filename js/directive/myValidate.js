angular.module('myValidate', [])
  .directive('myValidate', function(){
    return{
      scope:true,
      require:'ngModel',
      link: function(scope, element, attrs, ngModel){
        ngModel.$validators.myValiate = function(value){
          var status = true;
          if(value == ' ' || undefined){
            status = false;
          }
          return status;

        }
      }
    }


  });

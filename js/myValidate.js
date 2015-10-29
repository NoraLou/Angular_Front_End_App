angular.module('myValidate', [])
  .directive('myValidate', function(){

    return{
      scope:true,
      require:'ngModel',
      link: function(scope, element, attrs, ngModel){

      }
    }


  });

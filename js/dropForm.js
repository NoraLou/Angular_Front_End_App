angular.module('dropForm', [])
  .directive('dropForm', function(){

    return{
      restrict:'AE',
      templateUrl:'drop-form.html',

      link: function(scope, elem, attr){

        var dropButton = angular.element(document.querySelector('#drop-button'));

        var dropForm = angular.element(document.querySelector('#drop-form'));

        scope.dropped = false;

        scope.toggleForm = function(){
          console.log( 'scope.dropped  ', scope.dropped)
          if(scope.dropped == false){
            dropForm.css({'margin-top' : '0px'});
            scope.dropped = true;
          }else{
            dropForm.css({'margin-top' : '-200px'});
            scope.dropped = false;
          }
        }//test
      }
    }

  });


//var dropForm = elem.find('#drop-form');
// dropForm.style.webkitTransform= 'translateY(200px)'
// dropForm.style.transform = 'translateY(200px)'

// dropButton.on('click', function(formToOpen){
        //   return function(){
        //     console.log('dropForm  ', dropForm);
        //     dropForm.style.webkitTransform= 'translateY(200px)'

        // })(dropForm);



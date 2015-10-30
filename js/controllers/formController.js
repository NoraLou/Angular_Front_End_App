
   .controller('formController',['$scope','Todos', function($scope, Todos){

   this.createToDo = Todos.createToDo

   this.submit = function(isValid, data){
    if(!isValid) return
    $scope.createToDo(data)
   }
 }]);


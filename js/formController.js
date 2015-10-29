angular.module('formController', [])
   .controller('formController',['$scope', '$localStorage','Todos', function($scope, Todos, $localStorage){

   console.log("Todos  ", Todos)

   this.createToDo = Todos.createToDo

   this.submit = function(isValid, data){
    if(!isValid) return

    console.log(data);

    $scope.createToDo(data)
   }
 }]);


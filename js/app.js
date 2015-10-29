
(function(){
  var myApp = angular.module('myApp',['ngStorage','mainController', 'todoService', 'dropForm']);

  angular.module('mainController', [])

    .controller('mainController',['$scope', '$localStorage',  'Todos', function($scope, $localStorage, Todos){

    $scope.$storage = Todos.initStorage;

    $scope.formData = {};

    $scope.formData.text = ' ';

    $scope.createToDo = function(formData){
      console.log(formData.text)
      if(formData.text == ' ' || null){
        return;
      }
      $scope.$storage.toDos.push({
        text: formData.text,
        done: false
      })
      $scope.formData.text = ' ';
    };


    $scope.destroyTodo = function(todo){
      $localStorage.toDos.splice($localStorage.toDos.indexOf(todo),1);
    };

  }]);

})();


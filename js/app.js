
(function(){
  angular.module('myApp',['ngStorage','taskController', 'todoService' ]);

  angular.module('taskController', [])

    .controller('taskController',['$scope', '$localStorage', 'Todos', function($scope, Todos){

    // $scope.todoList = Todos.load();

    var todoList = Todos.load();

    // for(var i= 0; i < todoList.length;

    console.log("todoList : ", todoList);

    $

    $scope.todoList = todoList;

    $scope.formData = {};

    $scope.formData.text = '';

    $scope.hello = Todos.hello

    $scope.createToDo = Todos.createToDo


  }]);

})();



(function(){
  angular.module('myApp',['ngStorage','taskController', 'todoService' ]);

  angular.module('taskController', [])

    .controller('taskController',['$scope', '$localStorage', 'Todos', function($scope, $localStorage, Todos){

    // $scope.todoList = Todos.load();

    // var todoList = Todos.load();

    // for(var i= 0; i < todoList.length;

    // console.log("todoList : ", todoList);

    // $scope.storage = $localStorage;
    // console.log("$localStorage  ", $localStorage)

    $scope.$storage = $localStorage.$default({
        todoIndex : 5,
        toDos : [
          { text: "walk the dog", done: false},
          { text: "wash my hair", done: false},
          { text: "go to the park", done: false}
        ]
    });

    // $scope.

    // $scope.todoList = todoList;

    $scope.formData = {};

    $scope.formData.text = '';

    $scope.createToDo = function(text){
      $scope.$storage.toDos.push({
        text: text,
        done: false
      })

    }

    $scope.removeTodo = function(text){

    }




    // $scope.hello = Todos.hello

    // $scope.createToDo = Todos.createToDo


  }]);

})();


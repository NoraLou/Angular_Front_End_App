

(function(){


  var initData = function(){
   console.log("starting localStorage*********")
   console.log(window.localStorage)
    if(window.localStorage.getItem('todosIndex') === null){
      var Todos = {};
      window.localStorage.setItem('todosIndex', Todos.index = 0);
      console.log("varTodos  ",Todos)
      console.log(window.localStorage)
    }else{
      console.log('already iniated')
    }
  }

  initData();

  angular.module('myApp',[ 'taskController', 'todoService' ]);

  angular.module('taskController', [])

    .controller('taskController',['$scope', 'Todos', function($scope, Todos){

    //should immediately load the todos from storage, then in a promise function set them to the scope

    $scope.hello = Todos.hello

    $scope.formData = {};

    $scope.test = "Hello Angular, you hooked up?"

    $scope.addTodo = function(){


    }

  }]);

})();


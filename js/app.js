

(function(){


  var initData = function(){
   console.log("starting localStorage*********")
   console.log(window.localStorage)
    if(window.localStorage.getItem('Todos') === null){
      var Todos = {};
      window.localStorage.setItem('Todos', Todos.index = 1);
    }else{
      console.log('already iniated')
    }
  }

  initData();

  angular.module('myApp',[ 'taskController', 'todoService' ]);

  angular.module('taskController', [])

    .controller('taskController',['$scope', 'Todos', function($scope, Todos){

    $scope.hello = Todos.hello

    $scope.formData = {};

    $scope.test = "Hello Angular, you hooked up?"

    $scope.addTodo = function(){


    }

  }]);

})();


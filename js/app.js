

(function(){


  angular.module('myApp',[ 'taskController', 'todoService' ]);

  angular.module('taskController', [])

    .controller('taskController',['$scope', 'Todos', function($scope, Todos){

    var init = Todos.load()

    $scope.formData = ' ';

    $scope.hello = Todos.hello

    $scope.createToDo = Todos.createToDo

  }]);

})();


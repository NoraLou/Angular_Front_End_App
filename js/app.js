

(function(){


  angular.module('myApp',[ 'taskController', 'todoService' ]);

  angular.module('taskController', [])

    .controller('taskController',['$scope', 'Todos', function($scope, Todos){

    var init = Todos.load()

    //should immediately load the todos from storage, then in a promise function set them to the scope

    $scope.hello = Todos.hello

    //REMINDER
    //loading(init, 'loading');

  }]);

})();


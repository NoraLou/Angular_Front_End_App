var myTodo = angular.module('myTodo',[ ])

myTodo.controller('taskController',function($scope, $http){
  $scope.formData = {};

  $scope.test = "Hello Angular, you hooked up?"

  $http.get('/api/todos')
    .success(function(data){
      $scope.todos = data;
      console.log(data);
    })
    .error(function(data){
      console.log('Error: ' + data);
    });

  $scope.addListItem = function(){
    $http.post('/api/todos', $scope.formData)
      .success(function(data){
        $scope.formData = {};
        $scope.todos = data;
        console.log(data);
      })
      .error(function(data){
        console.log('Error: ' + data);

      });
  };//create

  $scope.destroyListItem = function(id){
    $http.delete('/api/todos/' + id)
      .sucess(function(data){
        $scope.todos =  data;
        console.log(data)
      })
      .error(function(data){
        console.log("Error: " + data);
      })
  };

});
//taskController

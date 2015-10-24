

(function(){


  var initData = function(){
   console.log("starting localStorage*********")
   console.log(window.localStorage)
    if(window.localStorage.getItem('Todos') == undefined){
      var Todos = {};
      window.localStorage.setItem('Todos', Todos.index = 1);
    }else{
      console.log('already iniated')
    }
  }

  initData();

  var myApp = angular.module('myApp',[ ]);

  myApp.controller('taskController',function($scope, $http){

    $scope.formData = {};

    $scope.test = "Hello Angular, you hooked up?"




  });

})();


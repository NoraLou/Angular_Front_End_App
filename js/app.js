(function(){
  var myApp = angular.module('myApp',['ngStorage','ngAnimate','ngRoute','todoService', 'trimWords', 'myApp.directives'])

    .controller('mainController',['$scope', '$localStorage', 'Todos',function($scope, $localStorage, Todos, trimWordsFilter){

    $scope.$storage = Todos.initStorage;

    $scope.formData = {};

    $scope.formData.text = ' ';

    $scope.createToDo = Todos.createToDo

    $scope.formData.text = ' ';

    $scope.destroyTodo = Todos.destroyTodo;

    $scope.dropped = false;

  }])

   .controller('formController',['$scope','Todos', function($scope, Todos){

   this.createToDo = Todos.createToDo;

   this.submit = function(isValid, data){
    if(!isValid) return
    $scope.createToDo(data)

   }

 }]);

})();


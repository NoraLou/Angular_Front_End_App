(function(){
  var myApp = angular.module('myApp',['ngStorage','ngAnimate','ngRoute',

    'mainController', 'todoService', 'myValidate','formController']);

  angular.module('mainController', [])

    .controller('mainController',['$scope', '$localStorage', 'Todos', function($scope, $localStorage, Todos){

    $scope.$storage = Todos.initStorage;

    $scope.formData = {};

    $scope.formData.text = ' ';

    $scope.createToDo = Todos.createToDo

    $scope.formData.text = ' ';

    $scope.destroyTodo = Todos.destroyTodo;

  }])

})();


angular.module('todoService', ['ngStorage'])
  .factory('Todos', [ '$localStorage',function($localStorage){
    var self = {};

    self.initStorage = $localStorage.$default({
      todoIndex:0,
      toDos: [ ]





    });


  return self;

  }]);











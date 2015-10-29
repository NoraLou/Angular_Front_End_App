angular.module('todoService', ['ngStorage'])
  .factory('Todos', [ '$localStorage',function($localStorage){
    var self = {};

    self.initStorage = $localStorage.$default({
      todoIndex:0,
      toDos: [ ]
    });

    self.createToDo = function(formData){
      if(formData.text == ' ' || null){
        return;
      }

      self.initStorage.toDos.push({
        text: formData.text,
        done: false
      })

      formData.text = ' '

    };

    self.destroyTodo = function(todo){
      self.initStorage.toDos.splice($localStorage.toDos.indexOf(todo),1);
    };

    //self.updateTodo

  return self;

  }]);











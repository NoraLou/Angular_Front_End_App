angular.module('todoService', [])
  .factory('Todos', function(){

    var self = {};
    //might not need this global copy
    // var toDos = {};

    self.hello = "have a cup of coffee";

    self.load = function(){

      if(window.localStorage.getItem('toDosIndex') === null){
        window.localStorage.setItem('toDosIndex', 0);
        console.log('window.localStorage  :', window.localStorage);
      }else{
        console.log(window.localStorage);
      }

    };

    self.createToDo = function(text){
    //make a new todo
      var counter = Number(window.localStorage.getItem('toDosIndex')) + 1

      console.log("text", text)

      var toDoEntry = {
        text : text,
        id : counter
      }

      console.log(toDoEntry);
      window.localStorage.setItem('toDosIndex', counter);
      window.localStorage.setItem('toDo:'+ toDoEntry.id, JSON.stringify(toDoEntry));
      console.log(localStorage);

    };




    //provide a load / initialization function

    //getfunct

    //setfunct

    //destroyfunct

    //update funct


  return self;

  });

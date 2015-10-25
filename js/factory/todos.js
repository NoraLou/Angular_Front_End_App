angular.module('todoService', [])
  .factory('Todos', function(){

    var self = {};
    //might not need this global copy
    var toDos = {};

    self.hello = "have a cup of coffee";

    self.load = function(){

      if(window.localStorage.getItem('toDosIndex') === null){
        window.localStorage.setItem('toDosIndex', 1);
        toDos['index'] = 1
        console.log("toDos.index ", toDos.index)
        console.log('window.localStorage  :', window.localStorage);
      }else{
        console.log(console.log("already here"));
        console.log(window.localStorage);
        console.log("toDos.index ", toDos.index)
      }

    };

    self.createToDo = function(formData){
    //make a new todo
      var counter = toDos.index
      console.log("toDos  ", toDos);
      console.log("toDos.index ", toDos.index)
      console.log("counter", counter)

      var todoEntry = {
        text : formData,
        id : counter
      }

      console.log(todoEntry);
    };




    //provide a load / initialization function

    //getfunct

    //setfunct

    //destroyfunct

    //update funct


  return self;

  });

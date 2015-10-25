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
        console.log(console.log("already here"));
        console.log(window.localStorage);
        // console.log("toDos.index ", toDos.index)
      }

    };

    self.createToDo = function(formData){
    //make a new todo
      var counter = Number(window.localStorage.getItem('toDosIndex')) + 1
      console.log( "counter ", counter)
      console.log("formData ", formData)

      var toDoEntry = {
        text : formData,
        id : counter
      }

      window.localStorage.setItem('toDosIndex', counter);
      console.log(toDoEntry);

    };




    //provide a load / initialization function

    //getfunct

    //setfunct

    //destroyfunct

    //update funct


  return self;

  });

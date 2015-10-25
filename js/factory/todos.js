angular.module('todoService', [])
  .factory('Todos', function(){

    var self = {};

    self.hello = "have a cup of coffee";

    self.load = function(){

      if(window.localStorage.getItem('toDosIndex') === null){
        window.localStorage.setItem('toDosIndex', 0);
          return null;
      //make this into a function
      }else{
        if(window.localStorage.length){
          var toDoList = [], i, key;
          for(i = 0; i < window.localStorage.length; i++){
            key = window.localStorage.key(i);
            (console.log(key));
            if(/toDo:\d+/.test(key)){
              toDoList.push(JSON.parse(window.localStorage.getItem(key)));
              console.log(JSON.parse(window.localStorage.getItem(key)))
            }
          }
         // console.log("toDoList ", toDoList);
        }
      }
      return toDoList;
    };//load



    self.createToDo = function(text){
    //make a new todo
      var counter = Number(window.localStorage.getItem('toDosIndex')) + 1

      console.log("text", text)

      var toDoEntry = {
        text : text,
        id : counter,
        done: false
      }

      console.log(toDoEntry);
      //add a way to update display

      window.localStorage.setItem('toDosIndex', counter);
      window.localStorage.setItem('toDo:'+ toDoEntry.id, JSON.stringify(toDoEntry));
      console.log(localStorage);
      self.load()

    };

  return self;

  });











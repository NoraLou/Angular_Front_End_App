angular.module('todoService', [])
  .factory('Todos', function(){

    var self = {};
    //might not need this global copy
    var Todos = {};

    self.hello = "have a cup of coffee";

    self.load = function(){

      if(window.localStorage.getItem('todosIndex') === null){
        window.localStorage.setItem('todosIndex', Todos.index = 0);
        console.log('window.localStorage  :', window.localStorage);
      }else{
        console.log('already initiated !!')
      }

    }//load





    //provide a load / initialization function

    //getfunct

    //setfunct

    //destroyfunct

    //update funct


  return self;

  });

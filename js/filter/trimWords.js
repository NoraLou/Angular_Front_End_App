angular.module('trimWords', [])
  .filter('trimWords', function(){
    return function(input, words){
      if(isNaN(words)) return input;
      if(input){
        var inputWords = input.split(/\s+/);
          if(inputWords.length > words){
            input = inputWords.slice(0, words).join(' ') + '...';
          }
      }
      return input;
    };
  });


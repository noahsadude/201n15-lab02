'use strict';

console.log('I live!');

function fiveQuestions(){
//first question
  var today = new Date();
  var findCurrentHour = today.getHours();
  var guessCurrentHour = '';
    while (guessCurrentHour === ''){
      guessCurrentHour = prompt('What hour of the day is it? I read that it is hour '+findCurrentHour);
      guessCurrentHour = guessCurrentHour.toLowerCase();
      if(guessCurrentHour === 'y'|| guessCurrentHour === 'yes'||guessCurrentHour === 'true'){
        alert('Good! Otherwise we would have a problem');
      } else if(guessCurrentHour === 'n'|| guessCurrentHour === 'no'|| guessCurrentHour === 'false'){
        alert('Well, your computer clock seems to think otherwise');
      } else{
        alert('Invalid entry. Only yes/no, true/false, y/n accepted. Try again.');
        guessCurrentHour = '';
      }
    }
//second question
    console.log ('');
  }
fiveQuestions();

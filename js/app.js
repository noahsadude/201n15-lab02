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
  var guessWoodChuckCapacity = '';
  while (guessWoodChuckCapacity === ''){
    guessWoodChuckCapacity = prompt('How much wood could a woodchuck chuck if a woodchuck could chuck wood?');
    guessWoodChuckCapacity = guessWoodChuckCapacity.toLowerCase();
    if(guessWoodChuckCapacity === 'too much'){
      alert('You\'re right! Woodchucks can ingest or \"chuck\" as much as 1/5 of a pound of wood per day, roughly equal to a woodchuck\'s total size. Crazy right?');
    } else if(guessWoodChuckCapacity === 'not enough'){
      alert('Guess it depends on your definition. Woodchucks can move approximately 700 pounds of wood per day, per wikipedia.');
    } else{
      alert('Invalid entry. Only \"too much\" or "\not enough\" accepted. Try again.');
      guessWoodChuckCapacity = '';
    }
  }
}
fiveQuestions();

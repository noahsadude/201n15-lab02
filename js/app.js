'use strict';

console.log('I live!');

function fiveQuestions(){
console.log('Beginning first question');
//first question
  var countOfTrues = 0;
  var countOfFalses = 0;
  var countOfFails = 0;
  var today = new Date();
  var findCurrentHour = today.getHours();
  var guessCurrentHour = '';
    while (guessCurrentHour === ''){
      guessCurrentHour = prompt('What hour of the day is it? I read that it is hour '+findCurrentHour);
      guessCurrentHour = guessCurrentHour.toLowerCase();
      if(guessCurrentHour === 'y'|| guessCurrentHour === 'yes'||guessCurrentHour === 'true'){
        alert('Good! Otherwise we would have a problem');
        countOfTrues = countOfTrues + 1;
      } else if(guessCurrentHour === 'n'|| guessCurrentHour === 'no'|| guessCurrentHour === 'false'){
        alert('Well, your computer clock seems to think otherwise');
        countOfFalses = countOfFalses + 1;
      } else{
        alert('Invalid entry. Only yes/no, true/false, y/n accepted. Try again.');
        guessCurrentHour = '';
      }
    }
console.log('Beginning second question');
//second question
  var guessWoodChuckCapacity = '';
  while (guessWoodChuckCapacity === ''){
    guessWoodChuckCapacity = prompt('How much wood could a woodchuck chuck if a woodchuck could chuck wood?');
    guessWoodChuckCapacity = guessWoodChuckCapacity.toLowerCase();
    if(guessWoodChuckCapacity === 'too much'){
      alert('You\'re right! Woodchucks can ingest or \"chuck\" as much as 1/5 of a pound of wood per day, roughly equal to a woodchuck\'s total size. Crazy right?');
      countOfTrues = countOfTrues + 1;
    } else if(guessWoodChuckCapacity === 'not enough'){
      alert('Guess it depends on your definition. Woodchucks can move approximately 700 pounds of wood per day, per wikipedia.');
      countOfFalses = countOfFalses + 1;
    } else{
      alert('Invalid entry. Only \"too much\" or "\not enough\" accepted. Try again.');
      countOfFails = countOfFails + 1;
      guessWoodChuckCapacity = '';
    }
  }
console.log('Beginning third question');
//third question
  var hexMath = '';
  while (hexMath === ''){
    hexMath = prompt('Is 5 + 5 = A?');
    hexMath = hexMath.toLowerCase();
    if(hexMath === 'y'|| hexMath === 'yes'||hexMath === 'true'){
      alert('Yep! Hexidecimal is super weird right? But it\'s just a different way to look at numbers');
      countOfTrues = countOfTrues + 1;
    } else if(hexMath === 'n'|| hexMath === 'no'|| hexMath === 'false'){
      alert('Nope. In Hexidecimal land, that is a true statement. Base 16, sucker!');
      countOfFalses = countOfFalses + 1;
    } else{
      alert('Invalid entry. Only yes/no, true/false, y/n accepted. Try again.');
      countOfFails = countOfFails + 1;
      hexMath = '';
    }
  }
console.log('Beginning fourth question');
  //fourth question
  var binaryMath = '';
  while (binaryMath === ''){
    binaryMath = prompt('Lets see if you learned to think outside the box. Is 10 + 11 = 101?');
    binaryMath = binaryMath.toLowerCase();
    if(binaryMath === 'y'|| binaryMath === 'yes'||binaryMath === 'true'){
      alert('Yep! just because it isn\'t in decimal, doesn\'t make it wrong.');
      countOfTrues = countOfTrues + 1;
    } else if(binaryMath === 'n'|| binaryMath === 'no'|| binaryMath === 'false'){
      alert('Nope. Binary! Try again!');
      countOfFalses = countOfFalses + 1;
      binaryMath = '';
    } else{
      alert('Invalid entry. Only yes/no, true/false, y/n accepted. Try again.');
      countOfFails = countOfFails + 1;
      binaryMath = '';
    }
  }
console.log('Beginning fifth question');
  //fifth question
  var outOfIdeas = '';
  while (outOfIdeas === ''){
    outOfIdeas = prompt('Whoo?');
    outOfIdeas = outOfIdeas.toLowerCase();
    if(outOfIdeas === 'whoo!'|| outOfIdeas === 'yes'||outOfIdeas === 'true' || outOfIdeas === 'y'){
      alert('Whoo!');
      countOfTrues = countOfTrues + 1;
    } else if(outOfIdeas === 'boo'|| outOfIdeas === 'no'|| outOfIdeas === 'false' || outOfIdeas === 'false'){
      alert('Boo!');
      countOfFalses = countOfFalses + 1;
      outOfIdeas = '';
    } else{
      alert('Invalid entry. Only whoo/boo, yes/no, true/false, y/n accepted. Try again.');
      countOfFails = countOfFails + 1;
      outOfIdeas = '';
    }
  }
  Document.write(
    '<p> number of true entries: '+countOfTrues+'</p>'+
    '<p> number of false entries: '+countOfFalses+'</p>'+
    '<p> number of invalid entries: '+countOfTrues+'</p>'
  )
}
fiveQuestions();

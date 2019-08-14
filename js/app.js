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
console.log('user inputted '+guessCurrentHour);
      guessCurrentHour = guessCurrentHour.toLowerCase();
      if(guessCurrentHour === 'y'|| guessCurrentHour === 'yes'|| guessCurrentHour === 'true'){
        alert('Good! Otherwise we would have a problem');
        countOfTrues = countOfTrues + 1;
console.log('user input correct');
      } else if(guessCurrentHour === 'n'|| guessCurrentHour === 'no'|| guessCurrentHour === 'false'){
        alert('Well, your computer clock seems to think otherwise');
        countOfFalses = countOfFalses + 1;
console.log('user input incorrect');
      } else{
        alert('Invalid entry. Only yes/no, true/false, y/n accepted. Try again.');
        guessCurrentHour = '';
console.log('user input was invalid');
      }
    }

console.log('end question 1');
console.log('count of correct inputs: '+countOfTrues);
console.log('count of inccorrect inputs: '+countOfFalses);
console.log('count of invalid inputs: '+countOfFails);

console.log('Beginning second question');
//second question
  var guessWoodChuckCapacity = '';
  while (guessWoodChuckCapacity === ''){
    guessWoodChuckCapacity = prompt('How much wood could a woodchuck chuck if a woodchuck could chuck wood?');
console.log('user inputted '+guessWoodChuckCapacity);
    guessWoodChuckCapacity = guessWoodChuckCapacity.toLowerCase();
    if(guessWoodChuckCapacity === 'too much'){
      alert('You\'re right! Woodchucks can ingest or \"chuck\" as much as 1/5 of a pound of wood per day, roughly equal to a woodchuck\'s total size. Crazy right?');
      countOfTrues = countOfTrues + 1;
console.log('user input correct');
    } else if(guessWoodChuckCapacity === 'not enough'){
      alert('Guess it depends on your definition. Woodchucks can move approximately 700 pounds of wood per day, per wikipedia.');
      countOfFalses = countOfFalses + 1;
console.log('user input incorrect');
    } else{
      alert('Invalid entry. Only \"too much\" or "\not enough\" accepted. Try again.');
      countOfFails = countOfFails + 1;
      guessWoodChuckCapacity = '';
console.log('user input was invalid');
    }
  }

console.log('end question 2');
console.log('count of correct inputs: '+countOfTrues);
console.log('count of inccorrect inputs: '+countOfFalses);
console.log('count of invalid inputs: '+countOfFails);
  
console.log('Beginning third question');
//third question
  var hexMath = '';
  while (hexMath === ''){
    hexMath = prompt('Is 5 + 5 = B?');
    hexMath = hexMath.toLowerCase();
console.log('user inputted '+hexMath);
    if(hexMath === 'y'|| hexMath === 'yes'||hexMath === 'true'){
      alert('Nope. In Hexidecimal land, that is a true statement. Base 16, sucker!');
console.log('user input incorrect');
      countOfFalses = countOfFalses + 1;
    } else if(hexMath === 'n'|| hexMath === 'no'|| hexMath === 'false'){
      alert('Yep! Hexidecimal is super weird right? But it\'s just a different way to look at numbers');
      countOfTrues = countOfTrues + 1;
console.log('user input correct');
    } else{
      alert('Invalid entry. Only yes/no, true/false, y/n accepted. Try again.');
      countOfFails = countOfFails + 1;
      hexMath = '';
console.log('user input was invalid');
    }
  }

console.log('end question 3');
console.log('count of correct inputs: '+countOfTrues);
console.log('count of inccorrect inputs: '+countOfFalses);
console.log('count of invalid inputs: '+countOfFails); 

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
console.log('user input was invalid');
    }
  }

console.log('end question 4');
console.log('count of correct inputs: '+countOfTrues);
console.log('count of inccorrect inputs: '+countOfFalses);
console.log('count of invalid inputs: '+countOfFails); 

console.log('Beginning fifth question');
  //fifth question
  var outOfIdeas = '';
  while (outOfIdeas === ''){
    outOfIdeas = prompt('Whoo?');
console.log('user inputted '+outOfIdeas);
    outOfIdeas = outOfIdeas.toLowerCase();
    if(outOfIdeas === 'whoo'|| outOfIdeas === 'yes'|| outOfIdeas === 'true' || outOfIdeas === 'y'){
      alert('Whoo!');
      countOfTrues = countOfTrues + 1;
console.log('user input correct');
    } else if(outOfIdeas === 'boo'|| outOfIdeas === 'no'|| outOfIdeas === 'false' || outOfIdeas === 'false'){
      alert('Boo!');
      countOfFalses = countOfFalses + 1;
      outOfIdeas = '';
console.log('user input incorrect');
    } else{
      alert('Invalid entry. Only whoo/boo, yes/no, true/false, y/n accepted. Try again.');
      countOfFails = countOfFails + 1;
      outOfIdeas = '';
console.log('user input was invalid');
    }
  }

console.log('end question 5');
console.log('count of correct inputs: '+countOfTrues);
console.log('count of inccorrect inputs: '+countOfFalses);
console.log('count of invalid inputs: '+countOfFails); 

  document.write(
    '<p> number of true entries: '+countOfTrues+'</p>'+
    '<p> number of false entries: '+countOfFalses+'</p>'+
    '<p> number of invalid entries: '+countOfFails+'</p>'
  )
}
fiveQuestions();

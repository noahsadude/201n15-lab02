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

//third question
  var hexMath = '';
  while (hexMath === ''){
    hexMath = prompt('Is 5 + 5 = A?');
    hexMath = hexMath.toLowerCase();
    if(hexMath === 'y'|| hexMath === 'yes'||hexMath === 'true'){
      alert('Yep! Hexidecimal is super weird right? But it\'s just a different way to look at numbers');
    } else if(hexMath === 'n'|| hexMath === 'no'|| hexMath === 'false'){
      alert('Nope. In Hexidecimal land, that is a true statement. Base 16, sucker!');
    } else{
      alert('Invalid entry. Only yes/no, true/false, y/n accepted. Try again.');
      hexMath = '';
    }
  }

  //fourth question
  var binaryMath = '';
  while (binaryMath === ''){
    binaryMath = prompt('Lets see if you learned to think outside the box. Is 10 + 11 = 101?');
    binaryMath = binaryMath.toLowerCase();
    if(binaryMath === 'y'|| binaryMath === 'yes'||binaryMath === 'true'){
      alert('Yep! just because it isn\'t in decimal, doesn\'t make it false.');
    } else if(binaryMath === 'n'|| binaryMath === 'no'|| binaryMath === 'false'){
      alert('Nope. Binary! Try again!');
      binaryMath = '';
    } else{
      alert('Invalid entry. Only yes/no, true/false, y/n accepted. Try again.');
      binaryMath = '';
    }
  }

  //fifth question
  var outOfIdeas = '';
  while (outOfIdeas === ''){
    outOfIdeas = prompt('Whoo?');
    outOfIdeas = outOfIdeas.toLowerCase();
    if(outOfIdeas === 'whoo!'|| outOfIdeas === 'yes'||outOfIdeas === 'true' || outOfIdeas === 'y'){
      alert('Whoo!');
    } else if(outOfIdeas === 'boo'|| outOfIdeas === 'no'|| outOfIdeas === 'false' || outOfIdeas === 'false'){
      alert('Boo!');
      outOfIdeas = '';
    } else{
      alert('Invalid entry. Only whoo/boo, yes/no, true/false, y/n accepted. Try again.');
      outOfIdeas = '';
    }
  }
}

fiveQuestions();

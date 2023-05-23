console.log('Hello World');

// *****************
// Object Literals
// *****************
let card0 = {
  suit:'Hearts',
  number: 2
}
let card1 = {
  suit:'AceSpades',
  number: 1
}
function isRed(cardToCheck){
  console.log('In isRed', cardToCheck);

  if(cardToCheck.suit === 'Hearts' || cardToCheck.suit === 'Diamond'){
    return true;
  } else {
    return false;
  }
}

console.log(isRed(card0));
console.log(isRed(card1));

// ***********************************
// Complete the Codecademy challenege
// ***********************************



// ***********************************
// PRACTICAL TEAMWORK: GROWTH MINDSET
// ***********************************

// Continous learning
// What is Growth mindset? Intelligence is Developed through Effort and Practice.
// How to engage in problem solving behavior.
// Perservance when challenged
// Setbacks and mistakes are a natural part of learning. It’s what happens when we take on valuable challenges.
// Growth Mindset: Accepts challenge and build new skill sets.
// Ask Questions, request feedback, and apply lessons learned.
// Learn by effort, mentors, dedication, and learning. Not everybody is the same.



// Must have confindence in yourself.Be able to speak clearly and confidently.
// Need mindset, commiting to doing, tactical decision are recording your daily actions.
// What you need to have confindence speak more slowly, say fewer words, smile more, Focus on the other person


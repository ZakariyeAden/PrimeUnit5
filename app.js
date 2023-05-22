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
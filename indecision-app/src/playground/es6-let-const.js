var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
// Cannot do let nameLet = 'Julie' - cannot redefine, but can reassign
nameLet = 'Julie'; // totally okay
console.log('nameLet', nameLet);

const nameConst = 'Frank';
// const nameConst = 'Guther'; // cannot do this!
// nameConst = 'mike' // Cannot even reassign!
console.log('nameConst', nameConst);

// Block scoping

var fullName = 'Jaime Farnan';
let firstName; // like doing "var firstName", this will log out to the console twice with the way we have the code set up. Const would throw an error.

if(fullName){
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
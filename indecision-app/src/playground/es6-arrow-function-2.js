// aruments object is no longer bound with arrow functions

// ES5
// const add = function(a, b){
//   console.log(arguments);
//   return a + b;
// }

const add = (a,b) => {
  // console.log(arguments); - try to log this and you'll get a console error saying arguments are not defined
  return a + b;
}

console.log(add(55,1, 1001));

// this keyword - no longer bound - ES5 example
const userES5 = {
  name: 'Jaime',
  cities: ['Boston', 'Rochester', 'San Diego'],
  printPlacesLived: function(){
    const that = this;
    console.log(this.name);
    console.log(this.cities);

    this.cities.forEach(function(city){
      console.log(that.name + ' has lived in ' + city); // this not accessible here! So using const that = this. ES6 has a better solution
    });
  }
}

userES5.printPlacesLived();

// Now for an ES6 example
const userES6 = {
  name: 'Jaime',
  cities: ['Boston', 'Rochester', 'San Diego'],
  // printPlacesLived: () => { ------ this would not work because ES6 arrow functions do not bind their own this value, so ES5 functions still have their place!
  printPlacesLived() { // ES6 syntax to create methods on an object and to still have the THIS value
    // map takes an array, that lets us provide a function that transforms each item, and we get back a new array with the transformed items
    // const cityMessages = this.cities.map((city) => {
    //   return this.name + ' has lived in ' + city;
    // });
    // return cityMessages;

    // This is the same as above, but much more succinct!
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
}

console.log(userES6.printPlacesLived());

// Challenge area

const multiplier = {
  nums: [4, 6, 8],
  multiplyBy: 3,
  multiply() {
    return this.nums.map((x) => x * this.multiplyBy);
  }
}

console.log(multiplier.multiply());













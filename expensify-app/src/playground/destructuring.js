//Object Restructuring

const person = {
  name: 'Jaime',
  age: 34,
  location: {
    city: 'Boston',
    temp: 2
  }
};

// On the right side is the object you're destructuring
// and on the left, the variable type you're creating.
// It's 1:1 and needs to match the names in the object you're destructuring
const {name = 'Anonymous', age} = person;
// If 'name' didn't exist on the person object, we'd get 'undefined is 34'
// This syntax ensures we'll always have a default value
// Because 'name' exists on the person object, we'll get 'Jaime', not 'Anonymous'

// Same as above
// const name = person.name;
// const age = person.age;

// This...
// console.log(`${person.name} is ${person.age}`);

// Becomes...
console.log(`${name} is ${age}`);

// the second const (temp) is a way to rename it something else
const {city, temp: temperature} = person.location;
console.log(`It's ${temperature} in ${city}`);

// Challenge
const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const {name: publisherName = 'Self Published'} = book.publisher;

console.log(publisherName);



// Array Destructuring
const address =  ['123 fake st', 'Boston', 'MA', '02118'];

// You put an ordered list of variable names in the brackets
// If you don't need them, leave them blank but keep a comma
// If you don't need any at the end, just leave them off
const [, citay, state = 'New York'] = address;

// console.log(`You are in ${address[1]}, ${address[2]}`);
console.log(`You are in ${citay}, ${state}`);

// Challenge

const item = ['Coffee(hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, s, m, l] = item;

console.log(`A medium ${coffee} costs ${m}`);
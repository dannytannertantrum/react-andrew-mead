class Person {
  // ES6 syntax here - name = 'Anonymous' is the same as doing this.name = name || 'Anonymous'
  constructor(name = 'Anonymous', age = 0){
    this.name = name;
    this.age = age;
  }
  getGreeting(){
    // return 'Hi. I am ' + this.name + '!'; ES6 version below
    return `Hi. I am ${this.name}!`;
  }
  getDescription(){
    return `${this.name} is ${this.age} years old`;
  }
}

class Student extends Person {
  // do not need to reconfigure name and age
  constructor(name, age, major){
    // super refers to the parent class
    // If we call it as a function, it's exactly the same as accessing the parent's constructor
    super(name, age);
    this.major = major;
  }
  hasMajor(){
    return !!this.major;
  }
  getDescription(){
    let description = super.getDescription();

    if(this.hasMajor()){
      description += `. Their major is ${this.major}.`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation){
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation(){
    return !!this.homeLocation;
  }

  getGreeting(){
    let greeting = super.getGreeting();

    if(this.hasHomeLocation()){
      greeting += ` I'm visiting from ${this.homeLocation}.`;
    }
    return greeting;
  }
}

const me = new Person('Jaime Farnan', 34);
console.log('logging person greeting and desc', me.getGreeting(), me.getDescription());

const meStudent = new Student('Jaime Farnan', 34, 'Music Industry - blegh');
console.log('logging student class, followed by desc', meStudent, meStudent.getDescription());

// do not have to provide all constructor arguments
const other = new Student();
console.log('other greeting and desc', other.getGreeting(),  other.getDescription());
console.log('other has major?', other.hasMajor());

const meTraveler = new Traveler('Jaime Farnan', 34, 'Boston');
console.log('meTraveler: ', meTraveler.getGreeting());
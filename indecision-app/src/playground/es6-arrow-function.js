const square = function(x){
 return x * x;
};

console.log(square(5));

// const squareArrow = (x) => {
//   return x * x;
// };

// Same as above! If only returning one value and don't need promises, make other function calls, if statements, etc. might as well use it!
const squareArrow = (x) => x * x;

console.log(squareArrow(10));

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}

const getFirstName2 = (fullName) => fullName ? fullName.split(' ')[0] : 'fullName';

console.log(getFirstName('Jaime Farnan'));
console.log(getFirstName2('Jaime Farnan'));
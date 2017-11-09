// Uppercase for ES6 is conventional, but it's required for React
// If we tried <header />, behind the scenes, React would try React.createElement('header', null)
// You can see 'header' was a string instead of React.createElement(Header, null)
// class Header extends React.Component {
//   React components HAVE to define a render method
//   render(){
//     return (
//       <div>
//         {/* THIS is a reference to the current component*/}
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

// SFC do not have access to THIS and neither do arrow functions, so how do we get them?
// Pass "props" in as the first argument - it's the same as this.props in class based components
// <User name="Jaime" />
// SFC are faster - they don't have all the baggage or the "extends" of React.Component
// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

// ReactDOM.render(<User name="Jaime" age={34} />, document.getElementById('app'));

class OldSyntax {
  constructor(){
    this.name = 'Mike';
    this.getGreeting = this.getGreeting.bind(this);
  }
  getGreeting() {
    return `Hi. My name is ${this.name}`;
  }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

// ---------------

class NewSyntax {
  name = 'Jen';
  // arrow functions have no THIS
  // The getGreeting function is always going to be bound to the class instance
  getGreeting = () => {
    return `Hi. My name is ${this.name}`;
  }
}
const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

// stateless functional component


class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options:[]
    };
  }

  // No way to manage life cycle in SFC - need to use a class based component.
  componentDidMount(){
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
  
      if(options){
        this.setState(() => ({options}));
      }
    } catch (e) {
      // Do nothing at all
    }
    
  }

  // Two arguments in ComponentDidUpdate allows us to access previous props and previous state.
  // Can call them whatever we want
  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  // fires when a component goes away
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }
  
  handleDeleteOptions(){
    // this.setState(() => {
    //   return {
    //     options:[]
    //   };
    // });

    // Same as above. ES6 shorthand. Careful though... you need the parens AND curly braces around "options: []" e.g...
    // const num = () => {12 + 2} this is the same as const num = () => 12 + 2
    // The curly braces in the case above are encapsulating the return value
    // If you want an OBJECT returned, you need to put those curly braces in parens
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove){
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

  handlePick(){
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
  }

  handleAddOption(option){
    if(!option){
      return 'Enter valid value to add item';
    } else if(this.state.options.indexOf(option) > -1){
      return 'This option already exists'
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  }

  render(){
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return(
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

// defaultProps is a keyword - naming it something else will not work
// IndecisionApp.defaultProps = {
//   options: []
// };

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

// ^ left the above for examples and notes. Converting Header into SFC (Stateless Functional Component)
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}

// After the component is made, we can tack on default properties (must be called defaultProps)
Header.defaultProps = {
  title: 'Some default'
};

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?</button>
    </div>
  );
}

const Options = (props) => {
  return(
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      {
        props.options.map((option) => (
          <Option
            key={option}
            optionText={option} 
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }        
    </div>
  );
}

const Option = (props) => {
  return (
    <div>
      <p>
        {props.optionText}
        <button
          onClick={(e) => {
            // we don't want to pass the e argument up, so we create this function to pass up what we actually want
            props.handleDeleteOption(props.optionText);
          }}
        >
          remove
        </button>
      </p>
    </div>
  );
}

class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e){
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    // this.setState(() => {
    //   return {
    //     error // ES6 shorthand error: error
    //   };
    // });

    this.setState(() => ({ error }));

    if(!error) {
      e.target.elements.option.value = '';
    }
  }

  render(){
    return(
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

// SFC do not have access to THIS and neither do arrow functions, so how do we get them?
// Pass "props" in as the first argument - it's the same as this.props in class based components
// <User name="Jaime" />
// SFC are faster - they don't have all the bag or the "extends" of React.Component
// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
// ReactDOM.render(<User name="Jaime" age={34} />, document.getElementById('app'));
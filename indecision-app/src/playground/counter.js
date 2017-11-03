class Counter extends React.Component {

  constructor(props){
    super(props);

    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count:0
    };
  }

  // No way to manage life cycle in SFC - need to use a class based component.
  componentDidMount(){
    try {
      const stringCount = localStorage.getItem('count');
      const count = parseInt(stringCount, 10);
  
      if(!isNaN(count)){
        this.setState(() => ({count}));
      }
    } catch (e) {
      console.log('error', e);
      // Do nothing at all
    }
    
  }

  // Two arguments in ComponentDidUpdate allows us to access previous props and previous state.
  // Can call them whatever we want
  componentDidUpdate(prevProps, prevState){
    if(prevState.count !== this.state.count){
      localStorage.setItem('count', this.state.count);
    }
  }

  handleAddOne(){
    // setState is a function that takes a function as its first and only argument
    // that function's first argument returns the current state, commonly called "prevState"
    // if there's more part to state, e.g. this.state = {count:0, name: 'Julie'}, you don't need to call all of state
    // Just update what you need to update
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinusOne(){
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleReset(){
    // we don't need prevState because we don't care about it - we're just resetting.
    this.setState(() => {
      return {
        count: 0
      };
    })

    // older (possibly soon to be obselete syntaxt)
    // this.setState({
    //   count: 0
    // });
  }

  render(){
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// // babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

// const app = {
//   title: 'Title',
//   subtitle: 'Subtitle',
//   options: ['One', 'Two']
// }

// const template = (
//   <div>
//     <h1>{app.title}</h1>
//     {app.subtitle && <p>{app.subtitle}</p>}
//     <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
//   </div>
// );

// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
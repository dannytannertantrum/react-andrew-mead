class VisibilityToggle extends React.Component {
  constructor(props){
    super(props);

    this.toggleVis = this.toggleVis.bind(this);
    this.state = {
      visibility: false
    };
  }

  toggleVis(){
    console.log(this.state);
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    });
  }

  render(){
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVis}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some details you can now see!</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visibility = false;

// const toggleVis = () => {
//   visibility = !visibility;
//   renderTemplate();
// };

// const renderTemplate = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVis}>{visibility ? 'Hide details' : 'Show details'}</button>
//       {visibility && (
//         <div>
//           <p>Hey. These are some details you can now see!</p>
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(template, document.getElementById('app'));
// };

// renderTemplate();
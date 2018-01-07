import {createStore} from 'redux';
// store tracks our changing data over time
// You can't call createStore without any arguments
// it DOES expect a function to be its first argument.

// The first argument we pass to createStore is the current state.
// The second argument is the action passed in.
// We don't have a constructor to set up the default, so we create it inline.
const store = createStore((state = { count: 0 }, action) => {
  switch(action.type){
    case 'INCREMENT':
      return {
        // notice how we are not changing state or our action
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        // notice how we are not changing state or our action
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
      default:
        return state;
  }
});

store.subscribe(() => {
  // returns the current state
  console.log(store.getState());
});

//////////// ACTIONS /////////////
// An action is nothing more than an object that gets sent to the store.

// Increment the counter

// dispatch allows us to send off an action object.
// We need a single property on the action object: "type"
store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'DECREMENT'
});

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'DECREMENT'
});
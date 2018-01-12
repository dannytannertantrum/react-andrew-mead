import {createStore} from 'redux';
// store tracks our changing data over time
// You can't call createStore without any arguments
// it DOES expect a function to be its first argument.

/************* ACTIONS *************/

// Action generators - functions that return action objects
// We don't need a return statement because we are implying return's use
// by wrapping {} in ()
// payload needs to have a default set. If not, console error happens because payload is undefined
// const incrementCount = (payload = {}) => ({
//   type: 'INCREMENT',
//   incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });

// Same as above, but destructured
const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({count}) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

    // Another ex of destructuring

    // const add = (data, c) => {
    //   return data.a + data.b + c;
    // }

    // Same as above ^  
    // const add = ({a, b}, c) => {
    //   return a + b + c;
    // };
    // console.log(add({ a: 1, b: 2 }, 100));

/************* REDUCERS *************/
// 1. Reducers are pure functions - output is determined by the input
// 2. NEVER change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch(action.type){
    case 'INCREMENT':
      return {
        // notice how we are not changing state or our action
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        // notice how we are not changing state or our action
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
      default:
        return state;
  }
}

// The first argument we pass to createStore is the current state.
// The second argument is the action passed in.
// We don't have a constructor to set up the default,
// so we create it inline (as seen above in countReducer)
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  // returns the current state
  console.log(store.getState());
});

//////////// ACTIONS /////////////
// An action is nothing more than an object that gets sent to the store.

// Increment the counter

// dispatch allows us to send off an action object.
// We need a single property on the action object: "type"
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

// If you have a typo, the console will tell you now, as opposed to way above
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(setCount({ count: 101 }));
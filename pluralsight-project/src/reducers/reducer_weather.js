import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
	switch(action.type){
		case FETCH_WEATHER:
		// instead of push where we add something to an existing array,
		// concat takes the old array, gets rid of it entirely,
		// and creates a new array based on the old one and adds the value
		// so we're not mutating our state, we're returning new state
		// this is key in redux, as we should never mutate state
		
		// return state.concat([action.payload.data]);

		// This is the same as concat, but it puts the new entry at the front
		return [action.payload.data, ...state];

	}
	return state;
}
import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    <input 
      type="text"
      value={props.filters.text}
      onChange={(e) => {
        // connect gives us access to dispatch
        props.dispatch(setTextFilter(e.target.value));
      }}  
    />
    <select
      // This and above is known as a Controlled Input
      // Controlled Input = an input where the value is controlled by JavaScript
      value={props.filters.sortBy}
      onChange={(e) => {
        if(e.target.value === 'date'){
          props.dispatch(sortByDate());
        } else if (e.target.value === 'amount'){
          props.dispatch(sortByAmount());
        }
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
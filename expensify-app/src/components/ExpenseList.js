import React from 'react';
// "connect" connects your component to the redux store.
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.length}
    {
      props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />
      })
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
}

export default connect(mapStateToProps)(ExpenseList);

// As the store changes, your component will get re-rendered with those new values.

/********* SAME AS ABOVE, just easier to see what's going on
// The function inside connect determines what information from the store
// we want our component to access. The store's state gets passed in as the first argument
const ConnectedExpenseList = connect((state) => {
  // This function works by returning an object - usually it's from the state, but can by anything
  return {
    expenses: state.expenses
  };
})(ExpenseList);

export default ConnectedExpenseList; *******/
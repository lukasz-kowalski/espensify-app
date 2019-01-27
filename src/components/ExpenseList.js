import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = props => (
  <div className="content-container">
    <div className="list__header">
      <div className="only-mobile">Expenses</div>
      <div className="only-desktop">Expense</div>
      <div className="only-desktop">Amount</div>
    </div>
    <div className="list__body">
      {props.expenses.length === 0 ? 
        <div className="list__item list__item-message">
          <span>No expenses</span>
        </div> :
        (<div>
        {props.expenses.map(expense => 
          <ExpenseListItem 
            key={expense.id}
            {...expense}
        />)}</div>
        )
      }
    </div>
  </div>
);

const mapStateToProps = state => ({
    expenses: selectExpenses(state.expenses, state.filters)
  });

export default connect(mapStateToProps)(ExpenseList);

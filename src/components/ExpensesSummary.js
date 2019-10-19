import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
  const { expenses } = props;
  const expensesCount = expenses.length;
  const expensesTotal = numeral(selectExpensesTotal(expenses) / 100).format('$0,0.00');
  const expensesWord = expensesCount === 1 ? 'expense' : 'expenses';

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expensesCount}</span> {expensesWord} totaling <span>{expensesTotal}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/add">Add Expense</Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpensesSummary);
import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
  const { expenses } = props;
  const expensesCount = expenses.length;
  const expensesTotal = numeral(selectExpensesTotal(expenses) / 100).format('$0,0.00');
  const adjective = expensesCount === 1 ? 'expense' : 'expenses';

  return (
    <div>
      <h1>{`Viewing ${expensesCount} ${adjective} totaling ${expensesTotal}`}</h1>
    </div>
  )
}

const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpensesSummary);
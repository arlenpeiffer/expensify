import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let history, startEditExpense, startRemoveExpense, wrapper;

beforeEach(() => {
  history = { push: jest.fn() };
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  wrapper = shallow(
    <EditExpensePage
      expense={expenses[2]}
      history={history}
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
    />
  );
});

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle onClick', () => {
  wrapper.find('button').simulate('click');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
  expect(history.push).toHaveBeenLastCalledWith('/');
});

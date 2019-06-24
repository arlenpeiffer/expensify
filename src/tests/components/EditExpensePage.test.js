import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, history, removeExpense, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  history = { push: jest.fn() };
  removeExpense = jest.fn();
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      expense={expenses[2]}
      history={history}
      removeExpense={removeExpense}
    />
  );
});

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle onClick', () => {
  wrapper.find('button').simulate('click');
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
  expect(history.push).toHaveBeenLastCalledWith('/');
});

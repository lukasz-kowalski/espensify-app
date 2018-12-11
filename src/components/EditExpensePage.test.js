import React from 'react';
import expenses from '../reducers/testData/mocked-state';
import { shallow } from 'enzyme';
import { EditExpensePage } from './EditExpensePage';

let wrapper, history, editExpense, removeExpense;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = {
    push: jest.fn()
  }
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense} 
      removeExpense={removeExpense}
      history={history}
      expense={expenses[1]}
    />);
})

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test('should handle removeExpense', () => {
  wrapper.find('button').prop('onClick')();
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[1].id });
});

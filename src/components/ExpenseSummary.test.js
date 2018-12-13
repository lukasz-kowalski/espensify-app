import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from './ExpenseSummary';

test('should render ExpenseSummary correctly with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235} />);
  expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseSummary correctly with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={22} expensesTotal={4243252} />);
  expect(wrapper).toMatchSnapshot();
})

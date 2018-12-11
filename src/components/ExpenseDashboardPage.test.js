import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from './ExpenseDashboard';

test('should render ExpenseListItem correctly', () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});

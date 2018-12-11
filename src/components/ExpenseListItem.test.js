import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from './ExpenseListItem';
import expenses from '../reducers/testData/mocked-state';

test('should render ExpenseListItem correctly', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

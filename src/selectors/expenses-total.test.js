import expensesTotal from './expenses-total';
import expenses from '../reducers/testData/mocked-state';

test('should return 0 if no expenses', () => {
  const result = expensesTotal([]);
  expect(result).toBe(0);
})

test('should correctly add single expense', () => {
  const result = expensesTotal([expenses[0]]);
  expect(result).toBe(195);
})

test('should correctly add multiple expenses', () => {
  const result = expensesTotal(expenses);
  expect(result).toBe(24195);
})

import moment from 'moment';

export default ((expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter(expense => {
    const createdAtMoment = moment(expense.createdAt)
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true ;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((prevItem, nextItem) => {
    if (sortBy === 'date') {
      return prevItem.createdAt < nextItem.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return prevItem.amount < nextItem.amount ? 1 : -1;
    }
  });
});

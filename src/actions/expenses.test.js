import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../firebase/firebase';
import { startAddExpense, addExpense, editExpense, startEditExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense } from './expenses';
import expenses from '../reducers/testData/mocked-state';
import expensesReducer from '../reducers/expenses';

const uid = 'testuid'
const defaultAuth = { auth: { uid } }

const createMockStore = configureMockStore([thunk])

beforeEach(done => {
  const expensesData = {}
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt }
  })
  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done())
})

test('should setup remove expense action object', () => {
  const action = removeExpense({id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should remove expense from firebase', done => {
  const store = createMockStore(defaultAuth)
  const id = expenses[2].id
  store.dispatch(startRemoveExpense({ id })).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    })
    return database.ref(`users/${uid}/expenses/${id}`).once('value')
  }).then(snapshot => {
    expect(snapshot.val()).toBeFalsy()
    done()
  })
})

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'new note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'new note value'
    }
  });
});

test('should edit expense from firebase', done => {
  const store = createMockStore(defaultAuth)
  const id = expenses[0].id
  const updates = {
    description: 'new description',
    note: 'new note'
  }
  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    })
    return database.ref(`users/${uid}/expenses/${id}`).once('value')
  }).then(snapshot => {
    expect(snapshot.val().description).toBe(updates.description)
    done()
  })
})

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('should add expense to database and store', done => {
  const store = createMockStore(defaultAuth)
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better', 
    createdAt: 1000
  }
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }

    })
    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
  }).then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData)
      done()
  })
})

test('should add expense with defaults to database and store', done => {
  const store = createMockStore(defaultAuth)
  const expenseDefaults = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  }
  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefaults
      }
    })
    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
  }).then(snapshot => {
      expect(snapshot.val()).toEqual(expenseDefaults)
      done()
  })
})

test('should setup set expense action object with data', () => {
  const action = setExpenses(expenses)
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[1]])
})

test('should fetch the expenses from firebase', done => {
  const store = createMockStore(defaultAuth)
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
    done()
  })
})

import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// State
const demoState = {
    expenses: [{
        id: 'abc_id',
        desc: 'abc_desc',
        note: 'abc_note',
        amount: 1000,
        createdAt: 0,
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined,
    },
};

// Actions
const actionAddExpense = ({ desc = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        desc: desc,
        note: note,
        amount: amount,
        createdAt: createdAt,
    }
});

const actionRemoveExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id: id
});

const actionEditExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id: id,
    updates: updates,
});

const actionSetTextFilter = (text = '') => ({
    type: "SET_TEXT_FILTER",
    text: text,
});

const actionSortByDate = () => ({
    type: "SORT_BY_DATE",
    option: "date",
});

const actionSortByAmount = () => ({
    type: "SORT_BY_AMOUNT",
    option: "amount",
});

const actionSetStartDate = (date) => ({
    type: "SET_START_DATE",
    date: date,
});

const actionSetEndDate = (date) => ({
    type: "SET_END_DATE",
    date: date,
});


// Reducer
// Expense reducer
const ExpenseReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(( {id} ) => id !== action.id );
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {...expense, ...action.updates};
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
}

// Filter reducer
const FilterReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {...state, text: action.text}
        case 'SORT_BY_AMOUNT':
        case 'SORT_BY_DATE':
            return {...state, sortBy: action.option};
        case 'SET_START_DATE':
            return {...state, startDate: action.date};
        case 'SET_END_DATE':
            return {...state, endDate: action.date};
        default:
            return state;
    }
}

// Store
const store = createStore(
    combineReducers({
        expenses: ExpenseReducer,
        filters: FilterReducer,
    })
);

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || 
                                expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' ||
                                expense.createdAt <= endDate;
        const textMatch = text === undefined || 
                        expense.desc.toLowerCase().includes(text.toLowerCase());
        
        return startDateMatch && endDateMatch && textMatch; 
    }).sort((expense1, expense2) => {
        console.log(sortBy)
        if (sortBy === 'amount') {
            // large amount comes first
            return (expense1.amount < expense2.amount)? 1: -1;
        } else {
            // older data comes first
            return (expense1.createdAt > expense2.createdAt)? 1: -1;
        }
    });
}


const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    const expenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(expenses);
}); 

// Test
const expense1 = store.dispatch(actionAddExpense({
    desc: '100',
    note: '100',
    amount: 100,
    createdAt: 100
}));

const expense2 = store.dispatch(actionAddExpense({
    desc: '200',
    note: '200',
    amount: 200,
    createdAt: 200
}));
store.dispatch(actionSortByAmount());
// store.dispatch(actionSetStartDate(200));
// store.dispatch(actionSetEndDate(300));
//store.dispatch(actionSetTextFilter('10'));

/* store.dispatch(actionRemoveExpense({
    id: expense1.expense.id
}));

store.dispatch(actionEditExpense(expense2.expense.id, 
    {
        desc: 'editted desc',
        amount: 500
    }
));

store.dispatch(actionSetTextFilter('rent'));
store.dispatch(actionSetTextFilter());
store.dispatch(actionSortByAmount());
store.dispatch(actionSortByDate());
store.dispatch(actionSetStartDate(123));
store.dispatch(actionSetEndDate(456)); */


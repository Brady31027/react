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


// Actions: includes the follows
// ADD_EXPENSE
const actionAddExpense = ({ desc = '', note = '', amount = 0, createdBy = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        desc: desc,
        note: note,
        amount: amount,
        createdBy: createdBy,
    }
});

// REMOVE_EXPENSE
const actionRemoveExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id: id
});

// EDIT_EXPENSE
const actionEditExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id: id,
    updates: updates,
});

// SET_TEXT_FILTER
const actionSetTextFilter = (text = '') => ({
    type: "SET_TEXT_FILTER",
    text: text,
});

// SET_BY_DATE
const actionSetByDate = () => ({
    type: "SET_BY_DATE"
});

// SET_BY_AMOUNT
const actionSetByAmount = () => ({
    type: "SET_BY_AMOUNT"
});

// SET_START_DATE
const actionSetStartDate = () => ({
    type: "SET_START_DATE"
});

// SET_END_DATE
const actionSetEndDate = () => ({
    type: "SET_END_DATE"
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
                }else {
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

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
}); 

// Test
const expense1 = store.dispatch(actionAddExpense({
    desc: '100',
    note: '100',
    amount: 100,
    createdBy: 100
}));

const expense2 = store.dispatch(actionAddExpense({
    desc: '200',
    note: '200',
    amount: 200,
    createdBy: 200
}));

store.dispatch(actionRemoveExpense({
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
//  // Actions
// store.dispatch(actionIncrease({incrementBy: 3}));
// store.dispatch(actionDecrease({decrementBy: 2}));
// store.dispatch(actionReset());
// store.dispatch(actionSet({setBy: 100}));


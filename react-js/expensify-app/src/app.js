import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import getStore from './store/configureStore';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

import {actionAddExpense, actionRemoveExpense, actionEditExpense} from './actions/expenses';
import {actionSetTextFilter, actionSortByDate, 
    actionSortByAmount, actionSetStartDate, actionSetEndDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = getStore();

store.dispatch(actionAddExpense({
    desc: 'Water bill',
    note: 'Pay for water',
    amount: 123,
    createdAt: 100,
}));

store.dispatch(actionAddExpense({
    desc: 'Gas bill',
    note: 'Pay to PG&E',
    amount: 300,
    createdAt: 120,
}));

//store.dispatch(actionSetTextFilter("bill"));

const result = getVisibleExpenses(store.getState().expenses, store.getState().filters);
console.log(result);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render( jsx, document.getElementById('app'));


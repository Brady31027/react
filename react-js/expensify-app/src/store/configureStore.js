import {createStore, combineReducers} from 'redux';
import ExpenseReducer from '../reducers/expenses';
import FilterReducer from '../reducers/filters';

const getStore = () => {
    const store = createStore(
        combineReducers({
            expenses: ExpenseReducer,
            filters: FilterReducer,
        })
    );
    return store;
};

export default getStore;
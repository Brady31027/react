import {createStore} from 'redux';

// Action generator
const actionIncrease = ({incrementBy = 1} = {}) => ({
    type: 'INCREASE',
    incrementBy: incrementBy
});

const actionDecrease = ({decrementBy = 1} = {}) => ({
    type: 'DECREASE',
    decrementBy: decrementBy
});

const actionSet = ({setBy}) => ({
    type: 'SET',
    setBy: setBy
});
const actionReset = () => ({
    type: 'RESET'
});

// Reducer
const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREASE':
            return {count: state.count + action.incrementBy};
        case 'DECREASE':
            return {count: state.count - action.decrementBy};
        case 'RESET':
            return {count: 0};
        case 'SET':
            return {count: action.setBy};
        default:
            return state;
    }
}

const store = createStore((state = {count: 0}, action) => {
    
    switch (action.type) {
        case 'INCREASE':
            return {count: state.count + action.incrementBy};
        case 'DECREASE':
            return {count: state.count - action.decrementBy};
        case 'RESET':
            return {count: 0};
        case 'SET':
            return {count: action.setBy};
        default:
            return state;
    }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
}); 

 // Actions
store.dispatch(actionIncrease({incrementBy: 3}));
store.dispatch(actionDecrease({decrementBy: 2}));
store.dispatch(actionReset());
store.dispatch(actionSet({setBy: 100}));

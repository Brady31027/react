const ExpenseReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            console.log('reducer got:');
            console.log(action.expense);
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

export default ExpenseReducer;
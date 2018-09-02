import uuid from 'uuid';

export const actionAddExpense = ({ desc = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        desc: desc,
        note: note,
        amount: amount,
        createdAt: createdAt,
    }
});

export const actionRemoveExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id: id
});

export const actionEditExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id: id,
    updates: updates,
});
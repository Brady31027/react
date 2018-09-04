import React from 'react';
import {connect} from 'react-redux';
import {actionRemoveExpense} from '../actions/expenses';

const ExpenseListItem = ({dispatch, id, desc, amount, createdAt}) => {
    return (
        <div>
            <h3>{desc}</h3>
            <p>{amount} - {createdAt}</p>
            <button onClick={(e)=>{
                dispatch(actionRemoveExpense({id}));
            }}> Remove </button>
        </div>
    );
}

export default connect()(ExpenseListItem);
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {actionRemoveExpense} from '../actions/expenses';

const ExpenseListItem = ({dispatch, id, desc, amount, createdAt}) => {
    return (
        <div>
            <Link to={`/edit/${id}`}>
                <h3>{desc}</h3>
            </Link>
            <p>{amount} - {createdAt}</p>
            <button onClick={(e)=>{
                dispatch(actionRemoveExpense({id}));
            }}> Remove </button>
        </div>
    );
}

export default connect()(ExpenseListItem);
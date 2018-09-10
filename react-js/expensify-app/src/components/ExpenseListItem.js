import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({dispatch, id, desc, amount, createdAt}) => {
    return (
        <div>
            <Link to={`/edit/${id}`}>
                <h3>{desc}</h3>
            </Link>
            <p>{amount} - {createdAt}</p>
        </div>
    );
}

export default ExpenseListItem;
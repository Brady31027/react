import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';

const ExpenseList = (props) => {
    return (
        <div>
            <h2>Expense List</h2>
            {props.expenses.map((expense, i) => {
                return <ExpenseListItem key={i} {...expense}/>
            })}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    };
}

export default connect(mapStateToProps)(ExpenseList);
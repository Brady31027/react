import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {actionAddExpense} from '../actions/expenses';

class CreatePage extends React.Component {
    
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                 <h1>Add Expense</h1>
                <ExpenseForm onSubmit={ (expense) => {
                    console.log(expense);
                    this.props.dispatch(actionAddExpense(expense))
                    this.props.history.push('/');
                }}/>
            </div>
        );
    }
}

export default connect()(CreatePage);
import React from 'react';
import {connect} from 'react-redux';
import {actionEditExpense} from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const EditPage = (props) => {
    console.log(props);
    return (
        <div>
            <h3>edit {props.match.params.id}</h3> 
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense)=>{
                    //console.log(expense);
                    props.dispatch(actionEditExpense(props.expense.id, expense));
                    props.history.push('');
            }}/>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
}

export default connect(mapStateToProps)(EditPage);
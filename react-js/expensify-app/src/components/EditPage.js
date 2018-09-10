import React from 'react';
import {connect} from 'react-redux';
import {actionEditExpense, actionRemoveExpense} from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const EditPage = (props) => {
    console.log(props);
    return (
        <div>
            <h3>edit</h3> 
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense)=>{
                    //console.log(expense);
                    props.dispatch(actionEditExpense(props.expense.id, expense));
                    props.history.push('');
            }} />
            <button onClick={(e)=> {
                props.dispatch(actionRemoveExpense({id: props.expense.id}));
                props.history.push('/');
            }}> Remove </button>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
}

export default connect(mapStateToProps)(EditPage);
import React from 'react';
import ExpenseForm from './ExpenseForm';

class CreatePage extends React.Component {
    
    constructor (props) {
        super(props);
        console.log(this.props);
    }

    render () {
        return (
            <div>
                 <h1>Add Expense</h1>
                <ExpenseForm />
            </div>
        );
    }
}

export default CreatePage;
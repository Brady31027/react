import React from 'react';
import moment from 'moment';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            desc: props.expense ? props.expense.desc: '',
            note: props.expense ? props.expense.note: '',
            amount: props.expense? (props.expense.amount/100).toString(): '',
            createdAt: props.expense? moment(props.expense.createdAt):moment(),
            calendarFocused: false,
            err_msg: '',
        };
        this.onDescChange = this.onDescChange.bind(this);
        this.onNoteChange = this.onNoteChange.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onDateFocusChange = this.onDateFocusChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
  

    onDescChange = (e) => {
        const desc = e.target.value;
        this.setState(() => ({ desc }));
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}));
        }
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({createdAt}));
        }
    }
    
    // passed-in arguement **MUST** be named "focused"
    onDateFocusChange = ( {focused} ) => {
        this.setState(() => ({calendarFocused: focused}));
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        if (!this.state.desc || !this.state.amount) {
            this.setState(() => {
                return {err_msg: 'Please fill desc and amount'}
            });

        } else {
            this.setState(() => {
                return {err_msg: ''}
            });

            this.props.onSubmit({
                desc: this.state.desc,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note,
            })
            // console.log(e.target);
        }
    }

    render () {
        return (
            <div>
                {this.state.err_msg && <p>{this.state.err_msg}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text" 
                        placeholder="Description" 
                        autoFocus 
                        value={this.state.desc}
                        onChange={this.onDescChange}/>

                    <input type="number" 
                        placeholder="Amount"
                        value={this.state.amount} 
                        onChange={this.onAmountChange} />
                    
                    <SingleDatePicker
                        date={this.state.createdAt} 
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onDateFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                        />

                    <textarea placeholder="Note" 
                        value={this.state.note} 
                        onChange={this.onNoteChange}>
                    </textarea>
                    
                    <button> Add Expense </button>
                </form>
            </div>
        );
    }
}

export default ExpenseForm;
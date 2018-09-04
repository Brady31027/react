import React from 'react';
import moment from 'moment';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            desc: '',
            note: '',
            amount: '',
            createdAt: moment(),
            calendarFocused: false,
        };
        this.onDescChange = this.onDescChange.bind(this);
        this.onNoteChange = this.onNoteChange.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onDateFocusChange = this.onDateFocusChange.bind(this);
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
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}));
        }
    }

    onDateChange = (createdAt) => {
        console.log(createdAt);
        this.setState(() => ({createdAt}));
    }
    
    // passed-in arguement **MUST** be named "focused"
    onDateFocusChange = ( {focused} ) => {
        this.setState(() => ({calendarFocused: focused}));
    }

    render () {
        return (
            <div>
                <form>
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
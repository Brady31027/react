import React from 'react';
import {connect} from 'react-redux';
import {actionSetTextFilter, actionSortByDate, actionSortByAmount} from '../actions/filters';

const ExpenseListFilters = (props) => {
    return (
        <div>
            <input type="text" value={props.filters.text} 
                onChange={(e) => {
                    props.dispatch(actionSetTextFilter(e.target.value));
                }} />
            <select value={props.filters.sortBy}
                    onChange={(e)=> {
                        if (e.target.value === 'date') {
                            props.dispatch(actionSortByDate());
                        } else {
                            props.dispatch(actionSortByAmount());
                        }
                    }}>
                <option value="amount">Amount</option>
                <option value="date">Date</option>
            </select>
        </div>
    );
}

const convertStateToProps = (state) => {
    return {
        filters: state.filters 
    };
}

export default connect(convertStateToProps)(ExpenseListFilters);
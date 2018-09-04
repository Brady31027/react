import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const DashboardPage = () => (
    <div>
        <p>Dashboard page</p>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default DashboardPage;
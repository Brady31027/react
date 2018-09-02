const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || 
                                expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' ||
                                expense.createdAt <= endDate;
        const textMatch = text === undefined || 
                        expense.desc.toLowerCase().includes(text.toLowerCase());
        
        return startDateMatch && endDateMatch && textMatch; 
    }).sort((expense1, expense2) => {
        console.log(sortBy)
        if (sortBy === 'amount') {
            // large amount comes first
            return (expense1.amount < expense2.amount)? 1: -1;
        } else {
            // older data comes first
            return (expense1.createdAt > expense2.createdAt)? 1: -1;
        }
    });
}

export default getVisibleExpenses;
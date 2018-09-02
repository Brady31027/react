// Filter reducer
const FilterReducer = (state = {text: "", sortBy: "amount"}, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {...state, text: action.text}
        case 'SORT_BY_AMOUNT':
        case 'SORT_BY_DATE':
            return {...state, sortBy: action.option};
        case 'SET_START_DATE':
            return {...state, startDate: action.date};
        case 'SET_END_DATE':
            return {...state, endDate: action.date};
        default:
            return state;
    }
}

export default FilterReducer;
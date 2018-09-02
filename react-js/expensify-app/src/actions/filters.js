export const actionSetTextFilter = (text = '') => ({
    type: "SET_TEXT_FILTER",
    text: text,
});

export const actionSortByDate = () => ({
    type: "SORT_BY_DATE",
    option: "date",
});

export const actionSortByAmount = () => ({
    type: "SORT_BY_AMOUNT",
    option: "amount",
});

export const actionSetStartDate = (date) => ({
    type: "SET_START_DATE",
    date: date,
});

export const actionSetEndDate = (date) => ({
    type: "SET_END_DATE",
    date: date,
});
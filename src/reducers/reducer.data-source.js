/**
 * Slice reducer for data source related options.
 * 
 */

// Initial slice state.
const initialState = {
    statisticSources: [
        {
            label: "Market price (USD)",
            value: "market-price"
        },
        {
            label: "Transactions per day",
            value: "transactions-per-day"
        },
        {
            label: "Total transaction fees (USD)",
            value: "total-transaction-fees"
        },
        {
            label: "Unique addresses",
            value: "unique-addresses"
        }
    ],

    selectedStatisticSource: 'market-price'
}

// Slice reducer.
const reducer = (state = initialState, action) => {
    switch(action.type) {

        case 'SET_STATISTIC_SOURCE': {
            return Object.assign({}, state, { selectedStatisticSource: action.value });
        }

        default: {
            return state;
        }
    }
}

module.exports = reducer;
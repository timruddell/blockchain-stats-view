/**
 * Slice reducer for data source related options.
 * 
 */

// Initial slice state.
const initialState = {

    // Currently available statistic source options.
    statisticSources: [
        {
            label: "Market price (USD)",
            value: "market-price"
        },
        {
            label: "Transactions per day",
            value: "n-transactions"
        },
        {
            label: "Total transaction fees (USD)",
            value: "transaction-fees-usd"
        },
        {
            label: "Unique addresses",
            value: "n-unique-addresses"
        }
    ],

    selectedStatisticSource: 'market-price',

    // Currently available timespan options.
    timespans: [
        {
            label: "Last day",
            value: "1days"
        },
        {
            label: "Last week",
            value: "1weeks"
        },
        {
            label: "Last month",
            value: "1months"
        },
        {
            label: "Last 3 months",
            value: "3months"
        },
        {
            label: "Last 6 months",
            value: "6months"
        },
        {
            label: "Last year",
            value: "1years"
        },
        {
            label: "Last 2 years",
            value: "2years"
        },
    ],

    selectedTimespan: "1days",

    data: [],
    dataLoaded: false
}

// Slice reducer.
const reducer = (state = initialState, action) => {
    switch(action.type) {

        case 'SET_STATISTIC_SOURCE': {
            return Object.assign({}, state, { selectedStatisticSource: action.value });
        }

        case 'SET_TIMESPAN': {
            return Object.assign({}, state, { selectedTimespan: action.value })
        }

        case 'SET_DATA': {
            return Object.assign({}, state, { data: action.value })
        }
        
        case 'SET_DATA_LOADED': {
            return Object.assign({}, state, { dataLoaded: action.value })
        }

        default: {
            return state;
        }
    }
}

module.exports = reducer;
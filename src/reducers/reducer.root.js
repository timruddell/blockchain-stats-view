const Redux = require('redux');
const dataSourceReducer = require("./reducer.data-source");

// Combine all slice reducers into a single top-level reducer function.
var reducers = Redux.combineReducers({
    dataSource: dataSourceReducer
});

module.exports = reducers;
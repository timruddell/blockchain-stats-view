import * as Redux from 'redux'
import dataSourceReducer from './reducer.data-source'

// Combine all slice reducers into a single top-level reducer function.
var reducers = Redux.combineReducers({
    dataSource: dataSourceReducer
});

export default reducers;
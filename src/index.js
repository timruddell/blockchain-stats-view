import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as Redux from 'redux'
import * as Thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import ApplicationView from './components.views/view.application'
import rootReducer from './reducers/reducer.root'

import { fetchData } from './actions/action.data-source'

// Create the top-level application store for use by child components.
var store = Redux.createStore(rootReducer, {}, Redux.applyMiddleware(Thunk.default));

// Fetch initial data.
store.dispatch(fetchData());

ReactDOM.render(
    <Provider store={store}>
        <ApplicationView />
    </Provider>, 
    // Target DOM container.
    document.getElementById("application-root")
);
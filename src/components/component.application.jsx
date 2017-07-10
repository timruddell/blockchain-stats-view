import * as React from 'react'
import * as Redux from 'redux'
import * as Thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import ApplicationView from '../components.views/view.application'
import rootReducer from '../reducers/reducer.root'

// Create the top-level application store for use by child components.
var store = Redux.createStore(rootReducer, {}, Redux.applyMiddleware(Thunk.default));

class Application extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <ApplicationView />
            </Provider>
        )
    }
}

export default Application;
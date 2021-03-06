

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'


import { applyMiddleware, createStore } from "redux"
import thunkMiddleware from "redux-thunk"
import { combineReducers } from "redux"
import { Provider } from 'react-redux'
import publicsReducer from './widgets/publics/reducer'


interface IStoreState {
    readonly pendingActions: number
    readonly isAuthenticated: boolean
}


const rootReducer = combineReducers({
    publicsReducer
})


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


ReactDOM.render(
    <Provider store={store}><App /></Provider>, document.getElementById('root')
)


serviceWorker.unregister()


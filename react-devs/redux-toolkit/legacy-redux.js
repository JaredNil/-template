

//
//
// src/app/store.js
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import postsReducer from '../reducers/postsReducer'
import usersReducer from '../reducers/usersReducer'

const rootReducer = combineReducers({
	posts: postsReducer,
	users: usersReducer
})

const middlewareEnhancer = applyMiddleware(thunk)

const composeWithDevTools =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composedEnhancers = composeWithDevTools(middlewareEnhancer)

const store = createStore(rootReducer, composedEnhancers)


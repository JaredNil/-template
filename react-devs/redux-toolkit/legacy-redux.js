// https://redux.js.org/usage/migrating-to-modern-redux#modernizing-redux-logic-with-redux-toolkit

// store
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



// src/app/constants/constants.js
export const FETCH_TODOS_STARTED = 'FETCH_TODOS_STARTED'
export const FETCH_TODOS_SUCCEEDED = 'FETCH_TODOS_SUCCEEDED'
export const FETCH_TODOS_FAILED = 'FETCH_TODOS_FAILED'

// ACTION ACTION ACTION
// ACTION ACTION ACTION
// ACTION ACTION ACTION

// src/app/actions/actions.js

import axios from 'axios'
import { FETCH_TODOS_STARTED, FETCH_TODOS_SUCCEEDED, FETCH_TODOS_FAILED }
	from '../constants/todos'

export const fetchTodosStarted = () => ({
	type: FETCH_TODOS_STARTED
})

export const fetchTodosSucceeded = todos => ({
	type: FETCH_TODOS_SUCCEEDED,
	todos
})

export const fetchTodosFailed = error => ({
	type: FETCH_TODOS_FAILED,
	error
})

export const fetchTodos = () => {
	return async dispatch => {
		dispatch(fetchTodosStarted())

		try {
			// Axios is common, but also `fetch`, or your own "API service" layer
			const res = await axios.get('/todos')
			dispatch(fetchTodosSucceeded(res.data))
		} catch (err) {
			dispatch(fetchTodosFailed(err))
		}
	}
}




// REDUCER REDUCER REDUCER REDUCER 

// src/app/reducers/reducers.js

import {
	FETCH_TODOS_STARTED,
	FETCH_TODOS_SUCCEEDED,
	FETCH_TODOS_FAILED
} from '../constants/todos'

const initialState = {
	status: 'uninitialized',
	todos: [],
	error: null
}

export default function sthReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_TODOS_STARTED: {
			return {
				...state,
				status: 'loading'
			}
		}
		case FETCH_TODOS_SUCCEEDED: {
			return {
				...state,
				status: 'succeeded',
				todos: action.todos
			}
		}
		case FETCH_TODOS_FAILED: {
			return {
				...state,
				status: 'failed',
				todos: [],
				error: action.error
			}
		}
		default:
			return state
	}
}



// SELECTOR

// src/selectors/selector.js

export const selectTodosStatus = state => state.todos.status
export const selectTodos = state => state.todos.todos




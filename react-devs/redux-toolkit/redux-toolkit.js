// Realize async redux actions with slice



//
//
// src/app/store.js
import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../reducers/postsReducer'
import usersReducer from '../reducers/usersReducer'

// Automatically adds the thunk middleware and the Redux DevTools extension
const store = configureStore({
	// Automatically calls `combineReducers`, 'createStore', 'applyMiddleware'
	reducer: {
		posts: postsReducer,
		users: usersReducer
	}
})


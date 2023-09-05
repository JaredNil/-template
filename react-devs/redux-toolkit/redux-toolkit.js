// https://redux.js.org/usage/migrating-to-modern-redux#modernizing-redux-logic-with-redux-toolkit
// Realize async redux actions with slice



// STORE STORE STORE
// STORE STORE STORE


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




// SLICE SLICE SLICE
// SLICE SLICE SLICE

import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		// Give case reducers meaningful past-tense "event"-style names
		todoAdded(state, action) {
			const { id, text } = action.payload
			// "Mutating" update syntax thanks to Immer, and no `return` needed
			state.todos.push({
				id,
				text,
				completed: false
			})
		},
		todoToggled(state, action) {
			// Look for the specific nested object to update.
			// In this case, `action.payload` is the default field in the action,
			// and can hold the `id` value - no need for `action.id` separately
			const matchingTodo = state.todos.find(todo => todo.id === action.payload)

			if (matchingTodo) {
				// Can directly "mutate" the nested object
				matchingTodo.completed = !matchingTodo.completed
			}
		}
	}
})

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { todoAdded, todoToggled } = todosSlice.actions

// Export the slice reducer as the default export
export default todosSlice.reducer



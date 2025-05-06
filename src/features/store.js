import { configureStore } from "@reduxjs/toolkit";
import bookcaseReducer from './bookcaseReducer.js'

const store = configureStore({
	reducer: {
		bookcase: bookcaseReducer,
		// favoriter
	}
})

export { store }

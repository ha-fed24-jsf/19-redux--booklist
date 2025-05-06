import { configureStore } from "@reduxjs/toolkit";
import bookcaseReducer from './bookcaseReducer.js'
import favoritesReducer from './favoritesReducer.js'

const store = configureStore({
	reducer: {
		bookcase: bookcaseReducer,
		favorites: favoritesReducer
	}
})

export { store }

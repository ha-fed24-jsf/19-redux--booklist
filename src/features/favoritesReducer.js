import { createSlice } from "@reduxjs/toolkit"

const initialState = []  // lista med id:n


const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorite: (state, action) => {
			// action.payload behöver vara id
			const found = state.find(id => id === action.payload)
			if( found ) {
				return state.filter(id => id !== action.payload)
			} else {
				state.push(action.payload)
			}
		}
	}
})

export const { toggleFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer

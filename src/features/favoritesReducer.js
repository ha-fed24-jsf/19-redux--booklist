import { createSlice } from "@reduxjs/toolkit"

const initialState = []  // lista med {title, id}


const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorite: (state, action) => {
			// console.log('favoritesReducer slice, payload=', action.payload, state.length)
			// action.payload: {id, title}
			const localId = action.payload.id
			const foundIndex = state.findIndex(book => {
				console.log('Finding: ', book.id, localId)
				return book.id === localId})
			if( foundIndex !== -1 ) {
				state.splice(foundIndex, 1)
			} else {
				state.push({
					id: localId,
					title: action.payload.title
				})
				console.log('Pushed: length=', state.length)
			}
		}
	}
})

export const { toggleFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer

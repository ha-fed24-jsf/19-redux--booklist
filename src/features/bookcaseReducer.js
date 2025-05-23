import { createSlice } from "@reduxjs/toolkit"

const initialState = [
	{ id: 1, title: "Hur man tappar bort sin TV-fjärr 10 gånger om dagen", author: "Bertil Flimmer", fav: false },
	{ id: 2, title: "Kaffekokaren som visste för mycket", author: "Saga Espresson" },
	{ id: 3, title: "Min katt är min chef", author: "Kattis Jamsson" },
	{ id: 4, title: "100 sätt att undvika måndagar", author: "Göran Snooze" },
	{ id: 5, title: "Gräv där du står – och hitta en pizzameny", author: "Maja Skruv" },
	{ id: 6, title: "Jag trodde det var tisdag", author: "Kim Vilsen" },
	{ id: 7, title: "Att prata med växter – och vad de egentligen tycker om dig", author: "Flora Tistel" }
]

const bookcaseSlice = createSlice({
	name: 'bookcase',  // ett unikt namn
	initialState,
	reducers: {
		addBook: (state, action) => {
			// Vi kan ändra i state direkt eftersom Redux använder biblioteket immer
			state.push({
				...action.payload, // title, author
				id: crypto.randomUUID()
			})
		},
		toggleFav: (state, action) => {
			// action.payload behöver vara id
			const found = state.find(book => book.id === action.payload)
			found.fav = !found.fav
		}
	}
})

export const { addBook, toggleFav } = bookcaseSlice.actions
export default bookcaseSlice.reducer

import { useDispatch } from "react-redux"
import { addBook } from "../features/bookcaseReducer"
import { useState } from "react"

const Add = () => {
	const [data, setData] = useState({
		title: '', author: ''
	})
	const dispatch = useDispatch()

	const handleSubmit = () => {
		// data är vår "action.payload"
		dispatch( addBook(data) )
	}

	return (
		<div className="form">
			<label> Titel </label>
			<input type="text"
				value={data.title}
				onChange={event => setData({ ...data, title: event.target.value })}
				/>

			<label> Författare </label>
			<input type="text"
				value={data.author}
				onChange={event => setData({ ...data, author: event.target.value })}
				/>

			<button type="submit"
				onClick={handleSubmit}
				> Lägg till ny bok </button>
		</div>
	)
}
export default Add

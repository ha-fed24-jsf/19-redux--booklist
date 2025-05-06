import { useDispatch, useSelector } from "react-redux"
import { toggleFavorite } from "../features/favoritesReducer"
import { toggleFav } from "../features/bookcaseReducer"

const Catalog = () => {
	const books = useSelector(state => state.bookcase)
	const dispatch = useDispatch()

	const toggle = (book) => {
		dispatch(toggleFavorite({
			id: book.id, title: book.title
		}))
		dispatch(toggleFav(book.id))
	}

	return (
		<div className="catalog">
			{books.map(b => (
				<div className="book" key={b.id}>
					<div
						className={'star' + (b.fav ? ' selected' : '')}
						role="button"
						onClick={() => toggle(b)}
						>❤️</div>
					"{b.title}", {b.author}
				</div>
			))}
		</div>
	)
}
export default Catalog

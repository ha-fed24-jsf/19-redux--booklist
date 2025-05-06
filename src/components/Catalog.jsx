import { useDispatch, useSelector } from "react-redux"
import { toggleFavorite } from "../features/favoritesReducer"

const Catalog = () => {
	const books = useSelector(state => state.bookcase)
	const dispatch = useDispatch()

	return (
		<div className="catalog">
			{books.map(b => (
				<div className="book" key={b.id}>
					<div
						className={'star' + (b.fav ? ' selected' : '')}
						role="button"
						onClick={() => dispatch(toggleFavorite(b.id))}
						>❤️</div>
					"{b.title}", {b.author}
				</div>
			))}
		</div>
	)
}
export default Catalog

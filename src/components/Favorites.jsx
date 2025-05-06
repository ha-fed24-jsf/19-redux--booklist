import { useSelector } from "react-redux"

const Favorites = () => {
	const stars = useSelector(state => state.favorites)
	console.log('Favorites stars=', stars)

	return (
		<div className="favorites">
			{stars.length === 0
			? <p> När du valt, kommer dina favoritböcker att visas här. </p>
			: <p> Dina favoriter: </p>
			}
			<ol>
			{stars.map(book => (
				<li
					className="book"
					key={book.id}>
					{book.title}
				</li>
			))}
			</ol>
		</div>
	)
}
export default Favorites

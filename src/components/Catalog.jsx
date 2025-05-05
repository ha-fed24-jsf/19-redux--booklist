const books = []

const Catalog = () => {

	return (
		<div className="catalog">
			{books.map(b => (
				<div className="book" key={b.id}>
					<div
						className={'star' + (b.fav ? ' selected' : '')}
						role="button"
						>❤️</div>
					"{b.title}", {b.author}
				</div>
			))}
		</div>
	)
}
export default Catalog

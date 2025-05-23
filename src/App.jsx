import { useState } from 'react'
import './App.css'
import Catalog from './components/Catalog.jsx'
import Favorites from './components/Favorites.jsx'
import Add from './components/Add.jsx'

const App = () => {
	const [page, setPage] = useState('cat')

	let content = null
	if( page === 'cat' ) {
		content = <Catalog />
	} else if( page === 'favs' ) {
		content = <Favorites />
	} else if( page === 'add' ) {
		content = <Add />
	}
	return (
	<div className="app">
		<header>
			<div className="hero">
				<img src="book-club.png" alt="Bokklubb på café" />
			</div>
			<h1> Läslistan </h1>
			<nav>
				<button
					data-testid="catalog"
					disabled={page === 'cat'}
					onClick={() => setPage('cat')}
					> Katalog </button>
				<button
					data-testid="add-book"
					disabled={page === 'add'}
					onClick={() => setPage('add')}
					> Lägg till bok </button>
				<button
					data-testid="favorites"
					disabled={page === 'favs'}
					onClick={() => setPage('favs')}
					> Mina böcker </button>
			</nav>
		</header>
		<main>
			<h2> Välkommen! </h2>
			<p> Sidan för dig som gillar att läsa. Välj dina favoriter. </p>
			{content}
		</main>
	</div>
)}

export default App

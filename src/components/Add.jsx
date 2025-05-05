
const Add = () => {

	return (
		<div className="form">
			<label> Titel </label>
			<input type="text"
				data-testid="add-input-title"
				/>

			<label> Författare </label>
			<input type="text"
				data-testid="add-input-author"
				/>

			<button type="submit"
				data-testid="add-submit"
				> Lägg till ny bok </button>
		</div>
	)
}
export default Add

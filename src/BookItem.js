import { BookItemCategories } from "./constant";
import PropTypes from "prop-types";

const BookItem = ({
	title,
	authors,
	thumbnail,
	bookId,
	getBookList,
	currentShelf,
	book,
	updateBookShelf,
}) => {
	const backgroundImage = `url("${thumbnail}")`;
	const optionList = Object.keys(BookItemCategories);

	return (
		<li>
			<div className="book">
				<div className="book-top">
					<div
						className="book-cover"
						style={{
							width: 128,
							height: 193,
							backgroundImage,
						}}
					></div>
					<div className="book-shelf-changer">
						<select
							value={book?.shelf ?? "none"}
							onChange={(event) => updateBookShelf(book, event.target.value)}
						>
							<option value="" disabled>
								Move to...
							</option>
							{optionList.map((opt, idx) => (
								<option key={idx} value={opt}>
									{BookItemCategories[opt]}
								</option>
							))}
						</select>
					</div>
				</div>
				<div className="book-title">{title}</div>
				<div className="book-authors">{authors?.toString()}</div>
			</div>
		</li>
	);
};

BookItem.propTypes = {
	title: PropTypes.string,
	authors: PropTypes.array,
	thumbnail: PropTypes.string,
	bookId: PropTypes.string,
	getBookList: PropTypes.func,
	currentShelf: PropTypes.string,
	book: PropTypes.object,
	updateBookShelf: PropTypes.func,
};

export default BookItem;

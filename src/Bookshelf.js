import PropTypes from "prop-types";
import BookItem from "./BookItem";
import { BookShelfCategories } from "./constant";

const Bookshelf = ({ categoryKey, bookList, getBookList, updateBookShelf }) => {
	const bookListByCategory = bookList.filter(
		(book) => book?.shelf === categoryKey
	);

	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{BookShelfCategories[categoryKey]}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{bookListByCategory?.length
						? bookListByCategory.map((book) => {
								const { title, authors, imageLinks, id } = book;
								return (
									<BookItem
										key={id}
										title={title}
										authors={authors}
										thumbnail={imageLinks?.thumbnail}
										bookId={id}
										getBookList={getBookList}
										currentShelf={categoryKey}
										book={book}
										updateBookShelf={updateBookShelf}
									/>
								);
						  })
						: ""}
				</ol>
			</div>
		</div>
	);
};
Bookshelf.propsTypes = {
	categoryKey: PropTypes.string,
	bookList: PropTypes.object,
	getBookList: PropTypes.func,
	updateBookShelf: PropTypes.func,
};

export default Bookshelf;

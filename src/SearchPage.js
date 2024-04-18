import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import BookItem from "./BookItem";
import * as api from "./BooksAPI";
import { CustomPath } from "./constant";

const SearchPage = () => {
	const { allBooks: bookList } = useLoaderData();
	const [searchResult, setSearchResult] = useState([]);

	const search = async (event) => {
		const queryString = event.target.value;
		if (!queryString?.length || !queryString.trim().length) {
			setSearchResult([]);
			return;
		}

		const result = await api.search(queryString);
		if (result?.length) {
			const idToShelf = {};
			bookList.map((book) => {
				if (book?.id && book?.shelf) {
					idToShelf[book.id] = book.shelf;
				}
			});

			result.map((book) => {
				book["shelf"] = idToShelf[book?.id] ?? null;
				return book;
			});
		}
		setSearchResult(result);
	};

	return (
		<>
			<div className="search-books">
				<div className="search-books-bar">
					<Link to={CustomPath.root} className="close-search">
						Close
					</Link>
					<div className="search-books-input-wrapper">
						<input
							type="text"
							placeholder="Search by title, author, or ISBN. Enter to search"
							onChange={(event) => search(event)}
						/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{searchResult?.length
							? searchResult.map((book) => {
									const { title, authors, imageLinks, id, shelf } = book;
									return (
										<BookItem
											key={id}
											title={title}
											authors={authors}
											thumbnail={imageLinks?.thumbnail}
											bookId={id}
											getBookList={() => {}}
											currentShelf={shelf}
										/>
									);
							  })
							: "Not found"}
					</ol>
				</div>
			</div>
		</>
	);
};

export default SearchPage;

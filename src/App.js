import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import * as api from "./BooksAPI";
import Bookshelf from "./Bookshelf";
import { BookShelfCategories } from "./constant";

export async function loadBookList() {
	const allBooks = await api.getAll();
	return { allBooks };
}

function App() {
	const bookCategoryKeyList = Object.keys(BookShelfCategories);

	const [bookList, setBookList] = useState([]);

	const getBookList = useCallback(async () => {
		const allBooks = await api.getAll();
		if (allBooks?.length) setBookList(allBooks);
	}, []);

	useEffect(() => {
		getBookList();
	}, [getBookList]);

	return (
		<div className="app">
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						{bookCategoryKeyList.map((categoryKey) => (
							<Bookshelf
								key={categoryKey}
								categoryKey={categoryKey}
								bookList={bookList}
								getBookList={getBookList}
							/>
						))}
					</div>
				</div>
				<div className="open-search">
					<Link to={"/search"} state={bookList}></Link>
				</div>
			</div>
		</div>
	);
}

export default App;

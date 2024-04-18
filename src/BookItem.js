import { useState } from "react";
import { useLocation } from "react-router-dom";
import * as api from "./BooksAPI";
import { BookItemCategories, CustomPath } from "./constant";

const BookItem = ({
	title,
	authors,
	thumbnail,
	bookId,
	getBookList,
	currentShelf,
}) => {
	const backgroundImage = `url("${thumbnail}")`;
	const optionList = Object.keys(BookItemCategories);

	const currentLocation = useLocation();
	const [shelf, setShelf] = useState(currentShelf)

	const changeBookCategory = async (event) => {
		const itemCategory = event.target.value;

		if (
			!bookId ||
			!itemCategory ||
			!itemCategory ||
			currentShelf === itemCategory
		) {
			alert("Nothing change!");
			return;
		}

		const result = await api.update({ id: bookId }, itemCategory);

		if (!result) {
			alert("Something went wrong");
			return;
		}

		if (currentLocation.pathname === CustomPath.root) {
			await getBookList();
		} else {
			setShelf(itemCategory)
		}
		alert("Done");
	};

	return (
		<li>
			<div className="book">
				<div className="book-top">
					<div
						className="book-cover"
						style={{
							width: 128,
							height: 193,
							backgroundImage: backgroundImage,
						}}
					></div>
					<div className="book-shelf-changer">
						<select
							value={shelf ?? "none"}
							onChange={(event) => changeBookCategory(event)}
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

export default BookItem;

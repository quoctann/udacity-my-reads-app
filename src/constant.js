const BookShelfCategories = {
	wantToRead: "Want to Read",
	currentlyReading: "Currently Reading",
	read: "Read",
};

const BookItemCategories = {
	...BookShelfCategories,
	none: "None",
};

const CustomPath = {
	root: "/",
	searchPage: "/search",
};

Object.freeze(BookShelfCategories);
Object.freeze(BookItemCategories);
Object.freeze(CustomPath);

export { BookItemCategories, BookShelfCategories, CustomPath };

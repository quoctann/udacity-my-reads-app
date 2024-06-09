import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App, { loadBookList } from "./App";
import { CustomPath } from "./constant.js";
import ErrorPage from "./ErrorPage.js";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import SearchPage from "./SearchPage.js";

const router = createBrowserRouter([
	{
		path: CustomPath.root,
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: CustomPath.searchPage,
				element: <SearchPage />,
				errorElement: <ErrorPage />,
				loader: loadBookList,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

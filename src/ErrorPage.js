import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const err = useRouteError();

	return (
		<>
			<div>
				<p>Something went wrong</p>
				<p>{err.statusText || err.message}</p>
			</div>
		</>
	);
};

export default ErrorPage;

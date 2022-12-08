import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/register',
		element: <Register />
	}
]);
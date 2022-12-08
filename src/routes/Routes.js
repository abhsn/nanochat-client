import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/register',
		element: <Register />
	},
	{
		path: '/login',
		element: <Login />
	}
]);
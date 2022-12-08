import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

function Login() {
	const [error, setError] = useState(false);
	const navigate = useNavigate();

	const { signIn } = useContext(AuthContext);

	const handleSubmit = e => {
		setError(false);
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;

		signIn(email, password)
			.then(result => { navigate('/') })
			.catch(err => setError(err.message));
	}

	return (
		<section>
			<form onSubmit={e => handleSubmit(e)} className="py-6">
				<h3 className="text-2xl text-center mb-6 font-bold">Login</h3>

				<div className="flex flex-col gap-4 w-10/12 mx-auto md:w-1/2 lg:w-3/12">
					{/* email input */}
					<TextField id="email" label="Email" variant="outlined" name="email" type="email" required />
					{/* password input */}
					<TextField id="password" label="Password" variant="outlined" name="password" type="password" required />
					{
						error && <span className="text-red-500">{error}</span>
					}
					{/* submit button */}
					<div className="grid place-items-center">
						<Button variant="outlined" type="submit">Login</Button>
					</div>

					<span className="text-center"><small>Don't have an account? Register <Link to="/register" className="text-blue-500">here</Link>.</small></span>
				</div>
			</form>
		</section>
	)
}

export default Login;
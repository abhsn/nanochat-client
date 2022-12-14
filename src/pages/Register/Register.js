import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

function Register() {
	const [error, setError] = useState(false);
	const navigate = useNavigate();

	const { signUp } = useContext(AuthContext);

	const handleSubmit = e => {
		setError(false);
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		const confirm = form.confirm.value;
		if (password === confirm) {
			signUp(email, password)
				.then(result => { navigate('/') })
				.catch(err => setError(err.message));
		} else {
			setError('Password does not match');
		}
	}

	return (
		<section>
			<form onSubmit={e => handleSubmit(e)} className="py-6">
				<h3 className="text-2xl text-center mb-6 font-bold">Create New Account</h3>

				<div className="flex flex-col gap-4 w-10/12 mx-auto md:w-1/2 lg:w-3/12">
					{/* email input */}
					<TextField id="email" label="Email" variant="outlined" name="email" type="email" required />
					{/* password input */}
					<TextField id="password" label="Password" variant="outlined" name="password" type="password" required />
					{/* confirm password input */}
					<TextField id="confirm" label="Confirm Password" variant="outlined" name="confirm" type="password" required />
					{/* shows error while password won't match */}
					{
						error && <span className="text-red-500">{error}</span>
					}
					{/* submit button */}
					<div className="grid place-items-center">
						<Button variant="outlined" type="submit">Create Account</Button>
					</div>

					<span className="text-center"><small>Already have an account? Login <Link to="/login" className="text-blue-500">here</Link>.</small></span>
				</div>
			</form>
		</section>
	)
}

export default Register;
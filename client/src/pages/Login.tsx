import { useState } from "react";
import { login } from "../services/authService";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e: any) => {
		e.preventDefault();

		const userData = {
			email: email,
			password: password,
		};

		login(userData).then(() => {
			navigate("/");
		});
	};

	return (
		<div className="block mx-auto mt-40 w-96">
			<form action="submit" onSubmit={handleSubmit}>
				<div className="mb-2">
					<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
						Email
					</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>

				<div className="mb-8">
					<label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
						Password
					</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>

				<button
					className="block px-6 py-2 w-full rounded-lg border-none bg-slate-200 hover:bg-slate-300 shadow-sm"
					type="submit">
					Sign in
				</button>
				<p className="text-sm mt-1">
					Don't have an account?{" "}
					<Link className="text-blue-600" to={"/signup"}>
						Click here to sign up.
					</Link>
				</p>
			</form>
		</div>
	);
};

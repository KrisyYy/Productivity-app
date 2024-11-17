import { Link, useNavigate } from "react-router-dom";
import { currentUser, logout } from "../services/authService";

export const Home = () => {
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate("/");
	};

	return (
		<div>
			<h1>Dashboard - to be done</h1>
			{!currentUser() ? (
				<>
					<Link to={"/signin"}>Login</Link>
					<Link to={"/signup"}>Register</Link>
				</>
			) : (
				<button onClick={() => handleLogout()}>Logout</button>
			)}
		</div>
	);
};

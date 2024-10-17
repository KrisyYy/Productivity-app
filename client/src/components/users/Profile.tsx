import { useEffect, useState } from "react";
import { currentUser, logout } from "../../services/authService";
import { IUser } from "../../interfaces/user";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
	const [user, setUser] = useState<IUser>();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate("/");
	};

	useEffect(() => {
		setUser(currentUser().dataValues);
	}, []);

	return (
		<div>
			<p>Profile</p>
			{!!user && (
				<div>
					<p>{user.email}</p>
					<p>{user.username}</p>
					<p>{user.createdAt}</p>
					<p>{user.id}</p>
					<button onClick={() => handleLogout()}>Logout</button>
				</div>
			)}
		</div>
	);
};

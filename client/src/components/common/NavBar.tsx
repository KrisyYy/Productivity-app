import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { currentUser } from "../../services/authService";
import { useEffect, useState } from "react";
import { IUser } from "../../interfaces/user";
import { Searchbar } from "./Searchbar";
import { faGear, faUser } from "@fortawesome/free-solid-svg-icons";

export const NavBar = () => {
	const [user, setUser] = useState<IUser>();

	useEffect(() => {
		setUser(currentUser()?.dataValues);
	}, []);

	return (
		<div className="flex flex-row p-2 justify-end items-center gap-1 border-b border-gray-300">
			<Searchbar />
			{user ? (
				<>
					<Link to={"/profile"}>
						<div className="flex flex-row px-3 h-12 gap-3 items-center mx-2 rounded-3xl select-none light-bg-hover group ">
							<span className="font-medium">{user.username}</span>
							<FontAwesomeIcon className="icon" icon={faUser} />
						</div>
					</Link>
					<Link to={"/settings"}>
						<div className="icon-box mx-2 rounded-3xl select-none light-bg-hover group ">
							<FontAwesomeIcon className="icon" icon={faGear} />
						</div>
					</Link>
				</>
			) : (
				<>
					<Link to={"/signin"}>
						<div className="flex flex-row px-3 h-12 gap-3 items-center mx-2 rounded-3xl select-none light-bg-hover group ">
							<span className="font-medium">Login</span>
						</div>
					</Link>
					<Link to={"/signup"}>
						<div className="flex flex-row px-3 h-12 gap-3 items-center mx-2 rounded-3xl select-none light-bg-hover group ">
							<span className="font-medium">Sign Up</span>
						</div>
					</Link>
				</>
			)}
		</div>
	);
};

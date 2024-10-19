import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { TasksPage } from "../tasks/TasksPage";
import { Login } from "../users/Login";
import { Register } from "../users/Register";
import { Error } from "../pages/Error";
import { Profile } from "../users/Profile";
import { Notes } from "../pages/Notes";
import { CategoriesPage } from "../categories/CategoriesPage";

export const Content = () => {
	return (
		<div className="flex-grow">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signin" element={<Login />} />
				<Route path="/signup" element={<Register />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/tasks" element={<TasksPage />} />
				<Route path="/tasks/:taskId" element={<TasksPage />} />
				<Route path="/categories" element={<CategoriesPage />} />
				<Route path="/notes" element={<Notes />} />
				<Route path="/not-found" element={<Error />} />
				<Route path="*" element={<Navigate to={"/not-found"} replace />} />
			</Routes>
		</div>
	);
};

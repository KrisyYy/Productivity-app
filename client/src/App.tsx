import { Sidebar } from "./components/common/Sidebar";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Tasks } from "./pages/Tasks";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Error } from "./pages/Error";
import { Profile } from "./pages/Profile";
import { Notes } from "./pages/Notes";
import { Categories } from "./pages/Categories";

function App() {
	return (
		<div className="h-screen flex flex-row items-stretch relative">
			<Sidebar />
			<div className="ml-16 flex flex-col h-full w-full transition-all ease-linear origin-left duration-100">
				<div className="flex-grow">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/signin" element={<Login />} />
						<Route path="/signup" element={<Register />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/tasks" element={<Tasks />} />
						<Route path="/tasks/:taskId" element={<Tasks />} />
						<Route path="/categories" element={<Categories />} />
						<Route path="/notes" element={<Notes />} />
						<Route path="/not-found" element={<Error />} />
						<Route path="*" element={<Navigate to={"/not-found"} replace />} />
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;

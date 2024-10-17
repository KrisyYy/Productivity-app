import { Sidebar } from "./components/common/Sidebar";
import { Content } from "./components/common/Content";
import { NavBar } from "./components/common/NavBar";
function App() {
	return (
		<div className="h-screen flex flex-row items-stretch">
			<Sidebar />
			<div
				className={
					"flex flex-col h-screen w-full transition-all ease-linear origin-left duration-100"
				}>
				<NavBar />
				<Content />
			</div>
		</div>
	);
}

export default App;

import { Sidebar } from "./components/common/Sidebar";
import { Content } from "./components/common/Content";
function App() {
	return (
		<div className="h-screen flex flex-row items-stretch relative">
			<Sidebar />
			<div className="ml-16 flex flex-col h-full w-full transition-all ease-linear origin-left duration-100">
				<Content />
			</div>
		</div>
	);
}

export default App;

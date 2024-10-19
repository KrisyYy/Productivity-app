import { Sidebar } from "./components/common/Sidebar";
import { Content } from "./components/common/Content";
import { useState } from "react";
function App() {
	const [expanded, setExpanded] = useState(localStorage.getItem("sidebar_expand") !== null);

	const handleExpand = () => {
		if (!expanded) {
			localStorage.setItem("sidebar_expand", "");
			setExpanded(true);
		} else {
			localStorage.removeItem("sidebar_expand");
			setExpanded(false);
		}
	};

	return (
		<div className="h-screen flex flex-row items-stretch relative">
			<Sidebar expanded={expanded} handleExpand={handleExpand} />
			<div className={"ml-16 flex flex-col h-full w-full transition-all ease-linear origin-left duration-100 relative"}>
				<Content />
				<div
					className={
						"fixed inset-0 bg-slate-800 bg-opacity-20 backdrop-blur-sm transition-all duration-200 " +
						(expanded ? "opacity-0 -z-10" : "opacity-100 z-10")
					}
					onClick={() => handleExpand()}></div>
			</div>
		</div>
	);
}

export default App;

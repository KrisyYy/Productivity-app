import { SidebarIcon } from "./SidebarIcon";
import { faBars, faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const Sidebar = () => {
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
		<div
			className={
				"h-screen py-2 px-1 flex flex-col justify-start bg-slate-800 transition-all duration-100 origin-left " +
				(expanded ? "w-18" : "w-52")
			}>
			<div className="flex flex-col gap-1">
				<SidebarIcon expanded={expanded} route={"/"} icon={faHouse} text={"Dashboard"} />
				<div className="flex flex-col gap-2 mt-4">
					<SidebarIcon expanded={expanded} route={"/tasks"} icon={faListCheck} text={"Tasks"} />
					<SidebarIcon expanded={expanded} route={"/notes"} icon={faNoteSticky} text={"Notes"} />
				</div>
			</div>
			<div
				onClick={handleExpand}
				className="icon-box fixed left-0 bottom-0 z-10 mx-3 my-2 mb-4 rounded-3xl dark-bg-hover cursor-pointer">
				<FontAwesomeIcon className="icon" icon={faBars} />
			</div>
		</div>
	);
};

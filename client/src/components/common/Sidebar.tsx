import { SidebarIcon } from "./SidebarIcon";
import { faGear, faNoteSticky, faTags, faUser } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";

export const Sidebar = () => {
	return (
		<div className="fixed z-20 h-screen w-16 py-2 flex flex-col justify-between bg-slate-800 transition-all duration-200 origin-left">
			<div className="flex flex-col">
				<SidebarIcon route={"/"} icon={faHouse} text={"Dashboard"} />
				<div className="flex flex-col mt-6">
					<SidebarIcon route={"/tasks"} icon={faListCheck} text={"Tasks"} />
					<SidebarIcon route={"/categories"} icon={faTags} text={"Categories"} />
					<SidebarIcon route={"/notes"} icon={faNoteSticky} text={"Notes"} />
				</div>
			</div>
			<div className="flex flex-col">
				<SidebarIcon route={"/profile"} icon={faUser} text={"Profile"} />
				<SidebarIcon route={"/"} icon={faGear} text={"Settings"} />
			</div>
		</div>
	);
};

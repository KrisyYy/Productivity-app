import { SidebarIcon } from "./SidebarIcon";
import { faBars, faGear, faNoteSticky, faTags, faUser } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Sidebar = ({ expanded, handleExpand }: { expanded: boolean; handleExpand: () => void }) => {
	return (
		<div
			className={
				"fixed z-20 h-screen py-2 flex flex-col justify-between bg-slate-800 transition-all duration-200 origin-left " +
				(expanded ? "w-16" : "w-52")
			}>
			<div className="flex flex-col gap-1">
				<SidebarIcon expanded={expanded} route={"/"} icon={faHouse} text={"Dashboard"} handleExpand={handleExpand} />
				<div className="flex flex-col gap-2 mt-4">
					<SidebarIcon
						route={"/tasks"}
						icon={faListCheck}
						text={"Tasks"}
						expanded={expanded}
						handleExpand={handleExpand}
					/>
					<SidebarIcon
						route={"/categories"}
						icon={faTags}
						text={"Categories"}
						expanded={expanded}
						handleExpand={handleExpand}
					/>
					<SidebarIcon
						route={"/notes"}
						icon={faNoteSticky}
						text={"Notes"}
						expanded={expanded}
						handleExpand={handleExpand}
					/>
				</div>
			</div>
			<div className="flex flex-col gap-1">
				<div className="flex flex-col gap-2 mt-4">
					<SidebarIcon
						route={"/profile"}
						icon={faUser}
						text={"Profile"}
						expanded={expanded}
						handleExpand={handleExpand}
					/>
					<SidebarIcon route={"/"} icon={faGear} text={"Settings"} expanded={expanded} handleExpand={handleExpand} />
				</div>
				<div onClick={handleExpand} className="icon-box mx-2 my-2 mb-4 rounded-3xl dark-bg-hover cursor-pointer">
					<FontAwesomeIcon className="icon" icon={faBars} />
				</div>
			</div>
		</div>
	);
};

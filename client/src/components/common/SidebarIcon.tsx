import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export const SidebarIcon = ({
	expanded,
	route,
	icon,
	text,
	handleExpand,
}: {
	expanded: boolean;
	route: string;
	icon: IconDefinition;
	text: string;
	handleExpand: () => void;
}) => {
	if (expanded)
		return (
			<Link to={route}>
				<div className="group select-none dark-bg-hover icon-box mx-2 rounded-2xl">
					<FontAwesomeIcon className="icon" icon={icon} />
					<p className="sidebar-tooltip group-hover:scale-100">{text}</p>
				</div>
			</Link>
		);
	else
		return (
			<Link to={route} onClick={handleExpand}>
				<div className="select-none dark-bg-hover flex flex-row p-5 h-12 gap-3 items-center rounded-3xl ">
					<div className="flex justify-center items-center">
						<FontAwesomeIcon className="icon" icon={icon} />
						{!expanded && <p className="sidebar-tooltip group-hover:scale-100">{text}</p>}
					</div>
					<span className={"font-medium transition-opacity duration-200 " + (expanded ? "opacity-0" : "opacity-100")}>
						{text}
					</span>
				</div>
			</Link>
		);
};

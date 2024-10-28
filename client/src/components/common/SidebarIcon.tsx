import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export const SidebarIcon = ({ route, icon, text }: { route: string; icon: IconDefinition; text: string }) => {
	return (
		<Link to={route}>
			<div className="group select-none dark-bg-hover icon-box mx-2 rounded-2xl">
				<FontAwesomeIcon className="icon" icon={icon} />
				<p className="sidebar-tooltip group-hover:scale-100">{text}</p>
			</div>
		</Link>
	);
};

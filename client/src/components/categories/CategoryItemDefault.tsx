import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const CategoryItemDefault = ({ text, icon }: { text: string; icon: IconProp }) => {
	return (
		<div className="flex flex-row gap-4 items-center p-2 rounded-md hover:bg-slate-300">
			<FontAwesomeIcon className="text-slate-500" icon={icon} />
			<p>{text}</p>
		</div>
	);
};

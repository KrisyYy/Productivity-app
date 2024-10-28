import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICategory } from "../../interfaces/category";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const CategoryItem = ({ category }: { category: ICategory }) => {
	return (
		<div className="flex flex-row gap-4 items-center p-2 rounded-md hover:bg-slate-300">
			<FontAwesomeIcon className="text-slate-500" icon={faBars} />
			<p>{category.name}</p>
		</div>
	);
};

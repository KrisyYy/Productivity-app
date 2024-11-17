import { useEffect, useState } from "react";
import { getAllCategories } from "../../../services/categoryService";
import { ICategory } from "../../../interfaces/category";
import { CategoryItem } from "../categories/CategoryItem";
import { faCalendarAlt, faCalendarDay, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { CategoryItemDefault } from "../categories/CategoryItemDefault";

export const TaskCategoriesList = () => {
	const [categories, setCategories] = useState<ICategory[]>([]);

	useEffect(() => {
		getAllCategories()
			.then((allCategories) => {
				setCategories(allCategories.data);
			})
			.catch((error) => {
				console.log(error);
				// TODO error handle in frontend
			});
	}, []);

	return (
		<div className="w-2/12 h-full">
			<div className="flex flex-col h-full p-4 gap-12 overflow-y-auto scroll-smooth divide-y bg-gray-200">
				<div>
					<CategoryItemDefault text={"Today"} icon={faCalendarDay} />
					<CategoryItemDefault text={"Upcoming"} icon={faCalendarAlt} />
					<CategoryItemDefault text={"Overdue"} icon={faExclamationCircle} />
				</div>
				<div className="">
					<p className="font-medium text-2xl p-2 mb-2">LISTS</p>
					{categories.map((category) => (
						<CategoryItem key={category.id} category={category} />
					))}
				</div>
			</div>
		</div>
	);
};

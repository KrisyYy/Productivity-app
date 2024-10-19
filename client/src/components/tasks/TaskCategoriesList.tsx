import { useEffect, useState } from "react";
import { getAllCategories } from "../../services/categoryService";
import { ICategory } from "../../interfaces/category";
import { CategoryItem } from "../categories/CategoryItem";

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
		<div className="w-1/4 overflow-y-auto h-full scroll-smooth divide-y divide-gray-200">
			<h1 className="font-medium text-4xl">Categories</h1>
			{categories.map((category) => (
				<CategoryItem key={category.id} category={category} />
			))}
		</div>
	);
};

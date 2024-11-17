import { useEffect, useState } from "react";
import { ICategory } from "../interfaces/category";
import { getAllCategories } from "../services/categoryService";
import { CreateCategoryForm } from "../components/features/categories/CreateCategoryForm";
import { CategoryList } from "../components/features/categories/CategoryList";

export const Categories = () => {
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
		<div>
			<CategoryList categories={categories} />
			<CreateCategoryForm setCategories={setCategories} />
		</div>
	);
};

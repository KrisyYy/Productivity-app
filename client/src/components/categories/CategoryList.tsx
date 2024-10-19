import { ICategory } from "../../interfaces/category";
import { CategoryItem } from "./CategoryItem";

export const CategoryList = ({ categories }: { categories: ICategory[] }) => {
	return (
		<>
			<h1 className="font-medium text-4xl p-4">Manage Categories</h1>
			{categories.map((category) => (
				<CategoryItem key={category.id} category={category} />
			))}
		</>
	);
};

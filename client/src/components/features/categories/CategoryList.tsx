import { ICategory } from "../../../interfaces/category";
import { CategoryItem } from "./CategoryItem";

export const CategoryList = ({ categories }: { categories: ICategory[] }) => {
	return (
		<>
			<p className="font-medium text-3xl p-4">Manage Categories</p>
			{categories.map((category) => (
				<CategoryItem key={category.id} category={category} />
			))}
		</>
	);
};

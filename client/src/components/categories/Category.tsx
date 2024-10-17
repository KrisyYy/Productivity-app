import { ICategory } from "../../interfaces/category";

export const Category = ({ category }: { category: ICategory }) => {
	return <p className="px-4 py-2">{category.name}</p>;
};

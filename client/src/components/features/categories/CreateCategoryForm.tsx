import { ICategory, ICategoryDataCreate } from "../../../interfaces/category";
import { createCategory } from "../../../services/categoryService";

export const CreateCategoryForm = ({
	setCategories,
}: {
	setCategories: React.Dispatch<React.SetStateAction<ICategory[]>>;
}) => {
	const handleSubmit = (e: any) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const { name } = Object.fromEntries(formData);
		const categoryData: ICategoryDataCreate = {
			name: name.toString(),
		};

		createCategory(categoryData).then((category) => {
			setCategories((state) => [...state, category.data]);
			e.target.reset();
		});
	};

	return (
		<form className="w-80 p-4" action="submit" onSubmit={(e) => handleSubmit(e)}>
			<div>
				<label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
					Name
				</label>
				<input
					id="name"
					name="name"
					type="text"
					className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>
			</div>

			<input
				type="submit"
				value="Add Category"
				className="block mt-2 px-6 py-2 w-full rounded-lg border-none bg-slate-200 hover:bg-slate-300 shadow-sm"
			/>
		</form>
	);
};

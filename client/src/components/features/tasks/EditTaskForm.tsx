import { useState } from "react";
import { updateTask } from "../../../services/taskService";
import { ITask } from "../../../interfaces/task";

export const EditTaskForm = ({
	id,
	field,
	initialValue,
	setForm,
	setTask,
	setTasks,
}: {
	id: string;
	field: string;
	initialValue: string;
	setForm: React.Dispatch<React.SetStateAction<boolean>>;
	setTask: React.Dispatch<React.SetStateAction<ITask | undefined>>;
	setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}) => {
	const [value, setValue] = useState<string>(initialValue);
	const [isValid, setIsValid] = useState<boolean>(true);

	const handleChange = (e: any) => {
		const currentValue = e.target.value;
		validate(currentValue);

		setValue(currentValue);
	};

	const validate = (val: string) => {
		val = val.trim();
		if (field === "name" && (val.length === 0 || val.length > 50)) {
			setIsValid(false); // TODO temp validation code
		} else setIsValid(true);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();

		if (value === initialValue) {
			setForm(false);
			return;
		}

		if (isValid) {
			const val = value.trim();
			const taskData = {
				id: id,
				[field]: val,
			};
			updateTask(taskData).then(() => {
				setTasks((state) =>
					state.map((t) => {
						if (t.id == id) {
							t = { ...t, [field]: val };
						}
						return t;
					})
				);
				setTask((state) => ({ ...state!, [field]: val }));
				setForm(false);
			});
		} else {
			setForm(false);
		}
	};

	return (
		<form action="submit" onSubmit={(e) => handleSubmit(e)}>
			{
				{
					description: (
						<textarea
							name="description"
							id="description"
							rows={3}
							value={value}
							onChange={handleChange}
							onBlur={handleSubmit}
							autoFocus
							className="block rounded-md border-0 p-1 w-full text-base text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"></textarea>
					),
					name: (
						<input
							id="name"
							name="name"
							type="text"
							value={value}
							onChange={handleChange}
							onBlur={handleSubmit}
							autoFocus
							className={
								"block rounded-md border-0 p-1 w-full text-3xl font-medium text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 " +
								(!isValid ? "text-red-700 " : "")
							}
						/>
					),
					deadline: (
						<input
							id="deadline"
							name="deadline"
							type="date"
							value={value}
							onChange={handleChange}
							onBlur={handleSubmit}
							className="rounded-lg border-0 py-1 px-2 w-8 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6 shadow-sm"
						/>
					),
					// TODO deadline form is a mess
				}[field]
			}
		</form>
	);
};

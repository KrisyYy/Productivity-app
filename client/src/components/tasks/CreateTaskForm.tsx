import { useNavigate } from "react-router-dom";
import { ITask, ITaskDataCreate } from "../../interfaces/task";
import { createTask } from "../../services/taskService";
import { useEffect, useRef } from "react";

export const CreateTaskForm = ({
	setTasks,
	setForm,
}: {
	setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
	setForm: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const navigate = useNavigate();
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		ref.current?.scrollIntoView();
		document.addEventListener("mousedown", handleOutsideClick);
		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, []);

	const handleOutsideClick = (e: any) => {
		if (!ref.current?.contains(e.target)) setForm(false);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const { name, description, deadline } = Object.fromEntries(formData);
		const taskData: ITaskDataCreate = {
			name: name.toString(),
			description: description.toString(),
			deadline: new Date(deadline.toString()),
		};

		if (!taskData.name) {
			//TODO validate input
		}

		createTask(taskData).then((task) => {
			setTasks((state) => [...state, task.data]);
			e.target.reset();
			navigate("/tasks/" + task.data.id);
			ref.current?.scrollIntoView();
			// setForm(false) TODO: not sure if i should keep this
		});
	};

	return (
		<div ref={ref} className="block p-4 pt-3 w-full">
			<form action="submit" onSubmit={(e) => handleSubmit(e)}>
				<div>
					<label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
						Name
					</label>
					<input
						id="name"
						name="name"
						type="text"
						autoFocus
						className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>

				<div>
					<label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
						Description
					</label>
					<textarea
						id="description"
						name="description"
						rows={2}
						className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>

				<div>
					<label htmlFor="deadline" className="block text-sm font-medium leading-6 text-gray-900">
						Deadline
					</label>
					<input
						id="deadline"
						name="deadline"
						type="date"
						placeholder="Select date"
						className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>

				<input
					type="submit"
					value="Add Task"
					className="block mt-2 px-6 py-2 w-full rounded-lg border-none bg-slate-200 hover:bg-slate-300 shadow-sm"
				/>
			</form>
			<button
				onClick={() => setForm(false)}
				className="block mt-4 px-6 py-2 rounded-xl border-none bg-red-200 hover:bg-red-300 shadow-sm">
				Cancel
			</button>
		</div>
	);
};

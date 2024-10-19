import { TaskItem } from "./TaskItem";
import { SortDropdown } from "./SortDropdown";
import { useState } from "react";
import { CreateTaskForm } from "./CreateTaskForm";
import { ITask } from "../../interfaces/task";

export const TaskList = ({
	tasks,
	setTasks,
}: {
	tasks: ITask[];
	setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}) => {
	const [showCreateForm, setShowCreateForm] = useState<boolean>(false);

	const showForm = () => {
		setShowCreateForm((state) => !state);
	};

	return (
		<div className="w-1/4 overflow-y-auto h-full scroll-smooth divide-y divide-gray-200">
			<div className="p-4 flex flex-row justify-between justify-items-center">
				<h1 className="font-medium text-4xl">Tasks</h1>
				<SortDropdown setTasks={setTasks} />
			</div>
			<ul className="divide-y divide-gray-200">
				{tasks.map((task) => (
					<TaskItem key={task.id} task={task} />
				))}
			</ul>
			{showCreateForm ? (
				<CreateTaskForm setTasks={setTasks} setForm={setShowCreateForm} />
			) : (
				<button
					className="block m-4 px-6 py-2 rounded-xl border-none bg-slate-200 hover:bg-slate-300 shadow-sm"
					onClick={showForm}>
					Add Task
				</button>
			)}
		</div>
	);
};

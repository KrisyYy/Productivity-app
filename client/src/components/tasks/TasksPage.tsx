import { useEffect, useState } from "react";
import { ITask } from "../../interfaces/task";
import { TaskDetails } from "./TaskDetails";
import { TaskList } from "./TaskList";
import { getAllTasks } from "../../services/taskService";
import { TaskCategoriesList } from "./TaskCategoriesList";

export const TasksPage = () => {
	const [tasks, setTasks] = useState<ITask[]>([]);

	useEffect(() => {
		getAllTasks().then((allTasks) => {
			setTasks(allTasks.data.sort((a, b) => Number(a.id) - Number(b.id)));
		});
	}, []);

	return (
		<div className="flex w-full h-full flex-row divide-x divide-gray-200">
			<TaskCategoriesList />
			<TaskList tasks={tasks} setTasks={setTasks} />
			<TaskDetails setTasks={setTasks} />
		</div>
	);
};

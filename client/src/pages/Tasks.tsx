import { useEffect, useState } from "react";
import { ITask } from "../interfaces/task";
import { TaskDetails } from "../components/features/tasks/TaskDetails";
import { TaskList } from "../components/features/tasks/TaskList";
import { getAllTasks } from "../services/taskService";
import { TaskCategoriesList } from "../components/features/tasks/TaskCategoriesList";

export const Tasks = () => {
	const [tasks, setTasks] = useState<ITask[]>([]);

	useEffect(() => {
		getAllTasks().then((allTasks) => {
			setTasks(allTasks.data.sort((a, b) => Number(a.id) - Number(b.id)));
		});
	}, []);

	return (
		<div className="w-full h-screen flex flex-row">
			<TaskCategoriesList />
			<TaskList tasks={tasks} setTasks={setTasks} />
			<TaskDetails setTasks={setTasks} />
		</div>
	);
};

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteTask, getTask } from "../../services/taskService";
import { ITask } from "../../interfaces/task";
import { EditTaskForm } from "./EditTaskForm";

export const TaskDetails = ({
	setTasks,
}: {
	setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}) => {
	const { taskId } = useParams() as { taskId: string };
	const [task, setTask] = useState<ITask>();
	const [editNameForm, setEditNameForm] = useState<boolean>(false);
	const [editDescriptionForm, setEditDescriptionForm] = useState<boolean>(false);
	const navigate = useNavigate();

	useEffect(() => {
		if (!taskId) return;

		getTask(taskId).then((task) => {
			if (task.data.id !== taskId) {
				navigate("/not-found");
				return;
			}
			setTask(task.data);
		});
	}, [navigate, taskId]);

	const formatDate = (date: Date) => {
		return new Date(date).toLocaleDateString("en-GB", {
			day: "numeric",
			month: "short",
			year: "numeric",
		});
	};

	const handleDelete = () => {
		deleteTask(task!.id).then(() => {
			setTasks((state) => state.filter((t) => t.id !== task!.id));
			navigate("/tasks");
		});
	};

	return (
		<>
			{!!taskId && !!task && (
				<div className="w-2/3 flex flex-col gap-4 overflow-auto">
					<div className="py-4 px-6 border-b border-gray-200">
						{editNameForm ? (
							<EditTaskForm
								id={taskId}
								field={"name"}
								initialValue={task.name}
								setForm={setEditNameForm}
								setTask={setTask}
								setTasks={setTasks}
							/>
						) : (
							<p
								onClick={() => setEditNameForm(true)}
								className="text-3xl font-medium pt-1 pl-1 cursor-pointer">
								{task.name}
							</p>
						)}
					</div>
					<div className="py-2 px-6">
						<p className="text-2xl font-medium mb-1">Description</p>
						{editDescriptionForm ? (
							<EditTaskForm
								id={taskId}
								field={"description"}
								initialValue={task.description}
								setForm={setEditDescriptionForm}
								setTask={setTask}
								setTasks={setTasks}
							/>
						) : !task.description ? (
							<p
								onClick={() => setEditDescriptionForm(true)}
								className="text-base text-gray-600 mt-2 ml-1 cursor-pointer">
								Add a description
							</p>
						) : (
							<p
								onClick={() => setEditDescriptionForm(true)}
								className="text-base text-gray-900 mt-2 ml-1 cursor-pointer">
								{task.description}
							</p>
						)}
					</div>
					<div className="py-2 px-6 flex flex-row justify-items-start">
						{task.deadline && (
							<div className="w-1/4">
								<p>Due: {formatDate(task.deadline)}</p>
							</div>
						)}
					</div>
					<div className="pt-2 pb-24 px-6">
						<button
							className="px-6 py-2 rounded-xl border-none bg-red-200 hover:bg-red-300 shadow-sm"
							onClick={handleDelete}>
							Delete
						</button>
					</div>
				</div>
			)}
		</>
	);
};

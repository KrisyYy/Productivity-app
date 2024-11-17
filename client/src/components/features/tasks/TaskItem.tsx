import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ITask } from "../../../interfaces/task";
import { Link } from "react-router-dom";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export const TaskItem = ({ task }: { task: ITask }) => {
	const dateFormatted = (date: Date) => {
		return new Date(date).toLocaleDateString("en-GB", {
			day: "numeric",
			month: "short",
			year: "numeric",
		});
	};

	const deadlineBgColor = (deadline: Date) => {
		const now = new Date();
		const date = new Date(deadline);
		const diffInDays = Math.ceil((date.getTime() - now.getTime()) / 1000 / 60 / 60 / 24);
		if (diffInDays < 0) return " bg-red-200 text-red-800";
		if (diffInDays < 1) return " bg-orange-100 text-orange-800";
		if (diffInDays < 3) return " bg-amber-100 text-amber-800";
		return " bg-gray-100 text-gray-800";
	};

	return (
		<Link to={"/tasks/" + task.id} className="block p-4 pt-3 w-full hover:bg-slate-100">
			{/* TODO Completed checkbox */}
			<div className="flex flex-row justify-between items-center">
				<p className="">{task.name}</p>
				<FontAwesomeIcon icon={faAngleRight} />
			</div>
			<div className="flex flex-row flex-wrap gap-x-4 items-center">
				{task.deadline && (
					<p className={"mt-2 px-1 py-0.5 text-xs font-semibold rounded-md" + deadlineBgColor(task.deadline)}>
						<FontAwesomeIcon icon={faClock} /> {dateFormatted(task.deadline)}
					</p>
				)}
			</div>
		</Link>
	);
};

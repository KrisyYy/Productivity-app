import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ITask, Priority, Status } from "../../interfaces/task"
import { Link } from 'react-router-dom';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


export const TaskItem = ({task}: {task: ITask}) => {

    const date = new Date(task.deadline);
    const dateFormatted = date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric"})

    const getStatusOrPriorityName = (value: string, field: string) => {
        const values = Object.values(field === "status" ? Status : Priority).filter(v => isNaN(Number(v)));
        const keys = Object.keys(field === "status" ? Status : Priority).filter(v => isNaN(Number(v)))
        const index = keys.indexOf(value);
        return values[index];
    }

    const statusBgColor = (status: string) => {
        switch(status) {
            case "onhold": return " bg-orange-200";
            case "pending": return " bg-blue-200";
            case "inprogress": return " bg-yellow-200";
            case "completed": return " bg-green-200";
            case "cancelled": return " bg-red-200";
            case "archived": return " bg-gray-200";
        }
    }

    const priorityBgColor = (priority: string) => {
        switch(priority) {
            case "low": return " bg-gray-200";
            case "medium": return " bg-orange-200";
            case "high": return " bg-red-200";
        }
    }

    // TODO deadline different colors depending on how close it is

    return(
        <Link to={'/tasks/' + task.id} className='block p-4 pt-3 w-full hover:bg-slate-100'>
            <p className="pb-2">{task.name}</p>
            <div className='flex flex-row gap-x-4'>
                <p className={"p-1 text-xs font-semibold text-gray-800 rounded-md" + statusBgColor(task.status)}>{getStatusOrPriorityName(task.status, "status")}</p>
                { !["completed", "archived", "cancelled"].includes(task.status) &&
                <p className={"p-1 text-xs font-semibold text-gray-800 rounded-md" + priorityBgColor(task.priority)}>{getStatusOrPriorityName(task.priority, "priority")}</p>}
                { (!!task.deadline && !["completed", "archived", "cancelled"].includes(task.status)) && 
                <p className="p-1 text-xs font-semibold text-gray-800 bg-gray-200 rounded-md">
                    <FontAwesomeIcon icon={icon({name: 'clock', style: 'regular'})} /> {dateFormatted}
                </p> }
                {/* TODO perhaps change the priority and deadline in the task itself instead of hiding it when its complete/archived/cancelled */}
            </div>
        </Link>
    )
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ITask } from "../../interfaces/task"
import { Link } from 'react-router-dom';
import { faClock } from '@fortawesome/free-regular-svg-icons';


export const TaskItem = ({task}: {task: ITask}) => {

    const dateFormatted = (date: Date) => {
        return new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric"});
    }

    // const getStatusOrPriorityName = (value: string, field: string) => {
    //     const values = Object.values(field === "status" ? Status : Priority).filter(v => isNaN(Number(v)));
    //     const keys = Object.keys(field === "status" ? Status : Priority).filter(v => isNaN(Number(v)))
    //     const index = keys.indexOf(value);
    //     return values[index];
    // }

    // const statusBgColor = (status: string) => {
    //     switch(status) {
    //         case "onhold": return " bg-orange-100 text-orange-800";
    //         case "pending": return " bg-blue-100 text-blue-800";
    //         case "inprogress": return " bg-amber-100 text-amber-800";
    //         case "completed": return " bg-teal-100 text-teal-800";
    //         case "cancelled": return " bg-red-100 text-red-800";
    //         case "archived": return " bg-gray-100 text-gray-800";
    //     }
    // }

    // const priorityBgColor = (priority: string) => {
    //     switch(priority) {
    //         case "low": return " bg-gray-100 text-gray-800";
    //         case "medium": return " bg-orange-100 text-orange-800";
    //         case "high": return " bg-red-200 text-red-800";
    //     }
    // }

    const deadlineBgColor = (deadline: Date) => {
        const now = new Date();
        const date = new Date(deadline);        
        const diffInDays = Math.ceil((date.getTime() - now.getTime()) / 1000 / 60 / 60 / 24);
        if (diffInDays < 0) return " bg-red-200 text-red-800";
        else if (diffInDays < 1) return " bg-orange-100 text-orange-800";
        else if (diffInDays < 3) return " bg-amber-100 text-amber-800";
        else return " bg-gray-100 text-gray-800";
    }

    // TODO HORRIBLE COLORS

    return(
        <Link to={'/tasks/' + task.id} className='block p-4 pt-3 w-full hover:bg-slate-100'>
            <p className="pb-2">{task.name}</p>
            <div className='flex flex-row flex-wrap gap-x-4 items-center pb-2'>
                {/* <p className={"px-1 py-0.5 text-xs font-semibold rounded-md" + statusBgColor(task.status)}>{getStatusOrPriorityName(task.status, "status")}</p>
                { !["completed", "archived", "cancelled"].includes(task.status) &&
                <p className={"px-1 py-0.5 text-xs font-semibold rounded-md" + priorityBgColor(task.priority)}>{getStatusOrPriorityName(task.priority, "priority")}</p>}
                { (!!task.deadline && !["completed", "archived", "cancelled"].includes(task.status)) &&  */}
                { task.deadline &&
                <p className={"px-1 py-0.5 text-xs font-semibold rounded-md" + deadlineBgColor(task.deadline)}>
                    <FontAwesomeIcon icon={faClock} /> {dateFormatted(task.deadline)}
                </p> }
            </div>
        </Link>
    )
}
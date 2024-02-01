import { TaskItem } from './TaskItem';
import { ITask } from "../../interfaces/task";

export const TaskList = ({tasks}: {tasks: ITask[]}) => {

    return(
        <>
            <h1 className="p-4 font-medium text-4xl">Tasks</h1>
            <ul className="divide-y divide-gray-200">
                {tasks.map(task => 
                    <TaskItem key={task.id} task={task} />)
                }
            </ul></>
    )
}
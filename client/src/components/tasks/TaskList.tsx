import { TaskItem } from './TaskItem';
import { ITask } from "../../interfaces/task";
import { SortDropdown } from './SortDropdown';
import { Dispatch, SetStateAction } from 'react';

export const TaskList = ({tasks, setTasks}: {tasks: ITask[], setTasks: Dispatch<SetStateAction<ITask[]>>}) => {

    return(
        <>
            <div className='p-4 flex flex-row justify-between justify-items-center'>
                <h1 className="font-medium text-4xl">Tasks</h1>
                <SortDropdown setTasks={setTasks} />
            </div>
            <ul className="divide-y divide-gray-200">
                {tasks.map(task => 
                    <TaskItem key={task.id} task={task} />)
                }
            </ul>
        </>
    )
}
import { useEffect, useState } from "react";
import { TaskItem } from './TaskItem';
import { ITask } from "../../interfaces/task";
import { CreateTaskForm } from "./CreateTaskForm";
import { getAllTasks } from "../../services/taskService";
import { useParams } from "react-router-dom";
import { TaskDetails } from "./TaskDetails";


export const TaskList = () => {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const { taskId } = useParams() as { taskId: string };
    const [showCreateForm, setShowCreateForm] = useState<boolean>(false);
    
    useEffect(() => {
        getAllTasks().then(allTasks => {
            setTasks(allTasks.data.sort((a, b) => Number(a.id) - Number(b.id)));
            
        })
    }, [])

    const showForm = () => {
        setShowCreateForm(state => !state);
    }

    return(
        <div className="flex flex-row divide-x divide-gray-200 overflow-hidden h-full">
            <div className="w-1/3 overflow-y-auto h-full scroll-smooth">
                <h1 className="p-4 border-b border-b-gray-200 font-medium text-4xl">Tasks</h1>
                <ul className="divide-y divide-gray-200">
                    {tasks.map(task => 
                        <TaskItem key={task.id} task={task} />)
                    }
                    { !showCreateForm ||
                        <CreateTaskForm setTasks={setTasks}/>
                    }
                    { showCreateForm ? 
                    <button className='block m-4 px-6 py-2 rounded-xl border-none bg-red-200 hover:bg-red-300 shadow-sm' onClick={showForm}>Cancel</button> : 
                    <button className='block m-4 px-6 py-2 rounded-xl border-none bg-slate-200 hover:bg-slate-300 shadow-sm' onClick={showForm}>Add Task</button>}
                </ul>
            </div>
            { !taskId || 
            <TaskDetails setTasks={setTasks}/>}
        </div>
    )
}
import { TaskDetails } from "../tasks/TaskDetails";
import { TaskList } from "../tasks/TaskList";
import { useEffect, useState } from "react";
import { ITask } from "../../interfaces/task";
import { getAllTasks } from "../../services/taskService";
import { CreateTaskForm } from "../tasks/CreateTaskForm";

export const Tasks = () => {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [showCreateForm, setShowCreateForm] = useState<boolean>(false);
    
    useEffect(() => {
        getAllTasks().then(allTasks => {
            setTasks(allTasks.data.sort((a, b) => Number(a.id) - Number(b.id)));
        })
    }, [])

    const showForm = () => {
        setShowCreateForm(state => !state);
    }

    return (
        <div className="flex flex-row divide-x divide-gray-200 overflow-hidden h-full">
            <div className="w-1/3 overflow-y-auto h-full scroll-smooth divide-y divide-gray-200">
            <TaskList tasks={tasks} setTasks={setTasks}/>
            { showCreateForm ? 
                <CreateTaskForm setTasks={setTasks} setForm={setShowCreateForm}/> 
                : 
                <button className='block m-4 px-6 py-2 rounded-xl border-none bg-slate-200 hover:bg-slate-300 shadow-sm' onClick={showForm}>Add Task</button>}
        </div>
            <TaskDetails setTasks={setTasks}/>
        </div>
    )
}
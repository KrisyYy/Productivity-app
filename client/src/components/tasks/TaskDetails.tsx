import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { deleteTask, getTask } from "../../services/taskService";
import { ITask } from "../../interfaces/task";
import { EditTaskForm } from "./EditTaskForm";
import { EditTaskDropdown } from "./EditTaskDropdown";

export const TaskDetails = ({setTasks}: {setTasks: React.Dispatch<React.SetStateAction<ITask[]>>}) => {
    const { taskId } = useParams() as { taskId: string };
    const [task, setTask] = useState<ITask>();
    const [editNameForm, setEditNameForm] = useState<boolean>(false);
    const [editDescriptionForm, setEditDescriptionForm] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!taskId) return;

        getTask(taskId).then(task => {
            setTask(task.data);
        })
    }, [taskId])

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric"})
    }

    const handleDelete = () => {
        deleteTask(task!.id).then(() => {
            setTasks(state => state.filter(t => t.id !== task!.id));
            navigate('/tasks')
        })
    }

    return (
        <>
            {!!taskId && !!task &&
            <div className="w-2/3 flex flex-col gap-4">
                <div className="p-4 border-b border-gray-200">
                    { editNameForm ? 
                        <EditTaskForm id={taskId} field={"name"} initialValue={task.name} setForm={setEditNameForm} setTask={setTask} setTasks={setTasks}/> :
                        <p onClick={() => setEditNameForm(true)} className="text-3xl font-medium pt-1 pl-1 cursor-pointer">{task.name}</p>
                    }
                </div>
                <div className="py-2 px-4">
                    <p className="text-2xl font-medium mb-1">Description</p>
                    { editDescriptionForm ? 
                        <EditTaskForm id={taskId} field={"description"} initialValue={task.description} setForm={setEditDescriptionForm} setTask={setTask} setTasks={setTasks} /> :
                        ( !task.description ? 
                            <p onClick={() => setEditDescriptionForm(true)} className="text-base text-gray-600 mt-2 ml-1 cursor-pointer">Add a description</p> :
                            <p onClick={() => setEditDescriptionForm(true)} className="text-base text-gray-900 mt-2 ml-1 cursor-pointer">{task.description}</p>)
                    }
                </div>
                <div className="py-2 px-4 flex flex-row justify-items-start">
                    <div className="w-1/4">
                        <p>Status: </p>
                        <EditTaskDropdown id={taskId} initialValue={task.status.toString()} field="status" setTask={setTask} setTasks={setTasks} />
                    </div>
                    { !["completed", "archived", "cancelled"].includes(task.status) &&
                    <div className="w-1/4">
                        <p>Priority: </p>
                        <EditTaskDropdown id={taskId} initialValue={task.priority.toString()} field="priority" setTask={setTask} setTasks={setTasks} />
                    </div>
                    }
                    
                    {(!!task.deadline && !["completed", "archived", "cancelled"].includes(task.status)) && 
                        <div className="w-1/4">
                            <p>Due: {formatDate(task.deadline)}</p>
                        </div>
                    // <div className="flex flex-row  w-1/4">
                    //     <EditTaskForm id={taskId} field={"deadline"} initialValue={task.deadline} setForm={setEditDescriptionForm} setTask={setTask} setTasks={setTasks} />
                    // </div>
                    }

                    {/* TODO perhaps change the priority and deadline in the task itself instead of hiding it when its complete/archived/cancelled */}

                </div>
                <div className="py-2 px-4">
                    <button className='px-6 py-2 rounded-xl border-none bg-red-200 hover:bg-red-300 shadow-sm' onClick={handleDelete}>Delete</button>
                </div>
            </div>}
        </>
    )
}
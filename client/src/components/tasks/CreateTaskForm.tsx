import { ITask, ITaskDataCreate } from "../../interfaces/task";
import { createTask } from "../../services/taskService";

export const CreateTaskForm = ({setTasks}: {setTasks: React.Dispatch<React.SetStateAction<ITask[]>>}) => {

    const handleSubmit = (e: any) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const {name, description, deadline} = Object.fromEntries(formData);
        const taskData: ITaskDataCreate = {
            name: name.toString(),
            description: description.toString(),
            deadline: deadline.toLocaleString()
        }

        if (!taskData.name) {
            //TODO validate input
        }

        createTask(taskData).then(task => {
            setTasks(state => [...state, task.data]);
            e.target.reset();
        });
    }

    return (
        <div className="block p-4 pt-3 w-full">
            <form action="submit" onSubmit={e => handleSubmit(e)}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                    <input id="name" name="name" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                    <input id="description" name="description" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>

                <div>
                    <label htmlFor="deadline" className="block text-sm font-medium leading-6 text-gray-900">Deadline</label>
                    <input id="deadline" name="deadline" type="date" placeholder="Select date" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>

                <input className="block mt-2 px-6 py-2 w-full rounded-lg border-none bg-slate-200 hover:bg-slate-300 shadow-sm" type="submit" value="Add Task" />
            </form>
        </div>
    )
}
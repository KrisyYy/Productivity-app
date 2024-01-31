import { ITask, Priority, Status } from "../../interfaces/task";
import { updateTask } from "../../services/taskService";

export const EditTaskForm = ({task, setTasks, setShowEditForm}: {task: ITask, setTasks: React.Dispatch<React.SetStateAction<ITask[]>>, setShowEditForm: React.Dispatch<React.SetStateAction<boolean>>}) => {

    const handleSubmit = (e: any) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const {name, description, status, priority, deadline} = Object.fromEntries(formData);
        console.log(deadline)
        const taskData: ITask = {
            id: task.id,
            userId: task.userId,
            name: name.toString(),
            description: description.toString(),
            status: status.toString() as unknown as Status,
            priority: priority.toString() as unknown as Priority,
            deadline: new Date().toLocaleString()
        }

        updateTask(taskData).then(task => {
            setTasks(state => 
                state.map(t => {
                    if (t.id === taskData.id) {
                        t.name = taskData.name;
                    }
                    return t;
                }
            ));
            e.target.reset();
            setShowEditForm(false);
        });
    }

    return (
        <div>
            <form action="submit" onSubmit={e => handleSubmit(e)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" />
                </div>

                <div>
                    <label htmlFor="description">Description</label>
                    <input id="description" name="description" type="text" />
                </div>

                <div>
                    <label htmlFor="status">Status</label>
                    <input id="status" name="status" type="text" />
                </div>

                <div>
                    <label htmlFor="priority">Priority</label>
                    <input id="priority" name="priority" type="text" />
                </div>

                <div>
                    <label htmlFor="deadline">Deadline</label>
                    <input id="deadline" name="deadline" type="date" />
                </div>

                <input type="submit" value="Update Task" />
            </form>
        </div>
    )
}
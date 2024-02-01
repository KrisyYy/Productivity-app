import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"
import { ITask } from '../../interfaces/task';
import { updateTask } from '../../services/taskService';
import { Status } from '../../interfaces/status';
import { Priority } from '../../interfaces/priority';

export const EditTaskDropdown = ({id, initialValue, field, setTask, setTasks}: 
                                    {id: string, initialValue: string, field: string,
                                    setTask: React.Dispatch<React.SetStateAction<ITask | undefined>>, 
                                    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>}) => {
    const [dropdown, setDropdown] = useState(false);
    const [value, setValue] = useState(initialValue);

    const dropDownOptions = Object.values(field === "status" ? Status : Priority).filter(v => isNaN(Number(v)));

    const getCurrentName = (value: string) => {
        const keys = Object.keys(field === "status" ? Status : Priority).filter(v => isNaN(Number(v)))
        const index = keys.indexOf(value);
        return dropDownOptions[index]
    }

    const handleBlur = ({currentTarget, relatedTarget}: {currentTarget: any, relatedTarget: any}) => {
        if (currentTarget.contains(relatedTarget)) return;
        setDropdown(false);
    }

    const handleChange = (e: any) => {
        setValue(e.target.value);
    }

    
    const handleOnSubmit = (e: any) => {
        e.preventDefault();

        const index = dropDownOptions.indexOf(value);
        const currentValue = Object.keys(field === "status" ? Status : Priority)[index];

        // TODO validate

        const taskData = {
            id: id,
            [field]: currentValue
        }

        updateTask(taskData).then(() => {
            setTasks(state => 
                state.map(t => {
                    if (t.id == id)
                    {
                        t = {...t, [field]: currentValue}
                    }
                    return t;
                }));
            setTask(state => ({...state!, [field]: currentValue}));
            setDropdown(false);
        })
    }

    return (
        <div onBlur={handleBlur} className="relative inline-block text-left w-32">
            <div>
                <button type="button" onClick={() => setDropdown(state => !state)} className="inline-flex w-full items-center justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm divide-gray-200 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {getCurrentName(initialValue)}
                    <FontAwesomeIcon icon={icon({name: 'chevron-down'})} />
                </button>
            </div>

            { dropdown && 
            <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    <form action='submit' onSubmit={handleOnSubmit}>
                    { dropDownOptions.map(option => 
                            <button key={option} value={option} onClick={handleChange} className="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-slate-100">{option}</button>)}
                    </form>
                </div>
            </div>}
        </div>
    )
}
import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { TaskList } from "../tasks/TaskList"

export const Content = () => {
    return (
        <div className="ml-16 w-full">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/tasks" element={<TaskList/>}/>
                <Route path="/tasks/:taskId" element={<TaskList/>}/>
            </Routes>
        </div>
    )
}
import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Tasks } from "../pages/Tasks"

export const Content = () => {
    return (
        <div className="ml-16 w-full">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/tasks" element={<Tasks/>}/>
                <Route path="/tasks/:taskId" element={<Tasks/>}/>
            </Routes>
        </div>
    )
}
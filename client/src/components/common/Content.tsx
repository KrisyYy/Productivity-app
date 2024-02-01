import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Tasks } from "../pages/Tasks"
import { Register } from "../users/Register"
import { Login } from "../users/Login"
import { Error } from "../pages/Error"
import { Profile } from "../users/Profile"
import { Notes } from "../pages/Notes"

export const Content = () => {
    return (
        <div className="ml-16 w-full">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/tasks" element={<Tasks/>} />
                <Route path="/tasks/:taskId" element={<Tasks/>} />
                <Route path="/notes" element={<Notes/>} />
                <Route path="/not-found" element={<Error/>} />
                <Route path="*" element={<Navigate to={"/not-found"} replace />} />
            </Routes>
        </div>
    )
}
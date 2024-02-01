import { Link } from "react-router-dom"

export const Home = () => {
    
    return (
        <div>
            <h1>Dashboard</h1>
            <Link to={"/login"}>Sign In</Link>
            <Link to={"/register"}>Sign Up</Link>
        </div>
    )
}
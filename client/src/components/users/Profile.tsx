import { useEffect, useState } from "react"
import { currentUser } from "../../services/authService";
import { IUser } from "../../interfaces/user";

export const Profile = () => {
    const [user, setUser] = useState<IUser>();

    useEffect(() => {
        setUser(currentUser().dataValues);
    }, [])

    return (
        <div>
            <p>Profile</p>
            { !!user && 
                <div>
                    <p>{user.email}</p>
                    <p>{user.username}</p>
                    <p>{user.createdAt}</p>
                    <p>{user.id}</p>
                </div>
            }
        </div>
    )
}
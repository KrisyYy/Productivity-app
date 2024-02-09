import http from "../http-common";


export const getAllUsers = () => {
    
}

export const getUser = (id: string) => {
    return http.get("/users/" + id);
}
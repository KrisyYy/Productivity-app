import http from "../http-common";
import { IUserDataLogin, IUserDataRegister } from "../interfaces/user";

export const register = (data: IUserDataRegister) => {
    return http.post('/user/signup', data);
}

export const login = (data: IUserDataLogin) => {
    return http.post('/user/signin', data).then(response => {
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
    });
}

export const logout = () => {
    localStorage.removeItem("user");
}

export const currentUser = () => {
    return JSON.parse(localStorage.getItem("user")!);
}
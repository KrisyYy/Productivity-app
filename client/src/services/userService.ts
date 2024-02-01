import http from "../http-common";
import { IUser, IUserDataLogin, IUserDataSignup } from "../interfaces/user";

export const register = (data: IUserDataSignup) => {
    return http.post<IUser>('/user/signup', data);
}

export const login = (data: IUserDataLogin) => {
    return http.post<IUser>('/user/login', data);
}
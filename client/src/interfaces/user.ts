import { ITask } from "./task"

export interface IUser {
    id: string,
    tasks: ITask[],
    username: string,
    email: string,
    createdAt: string
}

export interface IUserDataRegister {
    username: string,
    email: string,
    password: string
}

export interface IUserDataLogin {
    email: string,
    password: string
}
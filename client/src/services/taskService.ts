import http from "../http-common";
import { ITask, ITaskDataCreate, ITaskDataUpdate } from "../interfaces/task";

export const getAllTasks = () => {
    return http.get<ITask[]>("/tasks");
}

export const getTask = (id: string) => {
    return http.get<ITask>("/tasks/" + id);
}

export const createTask = (data: ITaskDataCreate) => {
    return http.post<ITask>("/tasks", data);
}

export const updateTask = (data: ITaskDataUpdate) => {
    return http.put<ITask>("/tasks/" + data.id, data);
}

export const deleteTask = (id: string) => {
    return http.delete<void>("/tasks/" + id);
}
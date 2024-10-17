import http from "../http-common";
import { ITask, ITaskDataCreate, ITaskDataUpdate } from "../interfaces/task";
import { authHeader } from "./auth-header";

export const getAllTasks = () => {
	return http.get<ITask[]>("/tasks", { headers: authHeader() });
};

export const getTask = (id: string) => {
	return http.get<ITask>("/tasks/" + id, { headers: authHeader() });
};

export const createTask = (data: ITaskDataCreate) => {
	return http.post<ITask>("/tasks", data, { headers: authHeader() });
};

export const updateTask = (data: ITaskDataUpdate) => {
	return http.put<ITask>("/tasks/" + data.id, data, { headers: authHeader() });
};

export const deleteTask = (id: string) => {
	return http.delete<void>("/tasks/" + id, { headers: authHeader() });
};

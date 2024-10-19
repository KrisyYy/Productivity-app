import http from "../http-common";
import { ICategory, ICategoryDataCreate, ICategoryDataUpdate } from "../interfaces/category";
import { ITask } from "../interfaces/task";
import { authHeader } from "./auth-header";

export const getAllCategories = () => {
	return http.get<ICategory[]>("/categories", { headers: authHeader() });
};

export const getCategoryTasks = (id: string) => {
	return http.get<ITask[]>("/categories/" + id + "/tasks", { headers: authHeader() });
};

export const createCategory = (data: ICategoryDataCreate) => {
	return http.post<ICategory>("/categories", data, { headers: authHeader() });
};

export const addTaskToCategory = (data: { taskId: string; categoryId: string }) => {
	return http.post<void>("/categories/" + data.categoryId + "/tasks", data, { headers: authHeader() });
};

export const updateCategory = (data: ICategoryDataUpdate) => {
	return http.put<void>("/categories/" + data.id, data, { headers: authHeader() });
};

export const deleteCategory = (id: string) => {
	return http.delete<void>("/categories/" + id, { headers: authHeader() });
};

export const deleteTaskFromCategory = (data: { taskId: string; categoryId: string }) => {
	return http.post<void>("/categories/" + data.categoryId + "/tasks/" + data.taskId, data, { headers: authHeader() });
};

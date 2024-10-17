import http from "../http-common";
import { ICategory, ICategoryDataCreate, ICategoryDataUpdate } from "../interfaces/category";
import { authHeader } from "./auth-header";

export const getAllCategories = () => {
	return http.get<ICategory[]>("/categories", { headers: authHeader() });
};

export const getCategory = (id: string) => {
	return http.get<ICategory>("/categories/" + id, { headers: authHeader() });
};

export const createCategory = (data: ICategoryDataCreate) => {
	return http.post<ICategory>("/categories", data, { headers: authHeader() });
};

export const updateCategory = (data: ICategoryDataUpdate) => {
	return http.put<ICategory>("/categories/" + data.id, data, { headers: authHeader() });
};

export const deleteCategory = (id: string) => {
	return http.delete<void>("/categories/" + id, { headers: authHeader() });
};

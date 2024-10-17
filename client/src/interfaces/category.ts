export interface ICategory {
	id: string;
	name: string;
	userId: string;
	tasks: string[];
}

export interface ICategoryDataCreate {
	name: string;
}

export interface ICategoryDataUpdate {
	id: string;
	name: string;
}

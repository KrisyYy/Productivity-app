export interface ITask {
	id: string;
	users: string[];
	creatorId: string;
	name: string;
	description: string;
	deadline: Date;
	tags: string[];
	categories: string[];
	createdAt: string;
	updatedAt: string;
}

export interface ITaskDataCreate {
	name: string;
	description: string;
	deadline: Date;
}

// TODO string[] (ids) or interface[]?

export interface ITaskDataUpdate {
	id: string;
	name?: string;
	description?: string;
	deadline?: Date;
	tags?: string[];
	categories?: string[];
}

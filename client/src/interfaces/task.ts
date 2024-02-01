import { Priority } from "./priority";
import { Status } from "./status";

export interface ITask {
    id: string;
    userId: string;
    name: string;
    description: string;
    status: Status;
    priority: Priority;
    deadline: Date;
    createdAt: string;
    updatedAt: string;
}

export interface ITaskDataCreate {
    name: string;
    description: string;
    deadline: Date;
}

export interface ITaskDataUpdate {
    id: string;
    name?: string;
    description?: string;
    deadline?: Date;
    status?: Status;
    priority?: Priority;
}
export interface ITask {
    id: string;
    userId: string;
    name: string;
    description: string;
    status: Status;
    priority: Priority;
    deadline: string;
}

export interface ITaskDataCreate {
    name: string;
    description: string;
    deadline: string;
}

export interface ITaskDataUpdate {
    id: string;
    name?: string;
    description?: string;
    deadline?: string;
    status?: Status;
    priority?: Priority;
}

export enum Status {
    pending = "Pending",
    inprogress = "In Progress",
    onhold = "On Hold",
    completed = "Completed",
    archived = "Archived",
    cancelled = "Cancelled"
}

export enum Priority {
    low = "Low",
    medium = "Medium",
    high = "High"
}
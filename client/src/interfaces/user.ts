export interface IUser {
	id: string;
	tasks: string;
	username: string;
	email: string;
	themePreference: string;
	createdAt: string;
	categories: string[];
}

export interface IUserItem {
	id: string;
	username: string;
}

export interface IUserDataRegister {
	username: string;
	email: string;
	password: string;
}

export interface IUserDataLogin {
	email: string;
	password: string;
}

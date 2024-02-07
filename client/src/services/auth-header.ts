import { currentUser } from "./authService"

export const authHeader = () => {
    const user = currentUser();

    if (user && user.accessToken) {
        return { 'x-access-token': user.accessToken };
    }
    else return {};
}
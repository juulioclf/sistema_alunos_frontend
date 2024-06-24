import { api } from "./api";

type createUserInterface = {
	email: string;
	password: string;
	name: string;
}

export async function createUser(data: createUserInterface) {
    const request = await api.post("user", data)

    return request
}
import { api } from "./api";

export type SignInRequestData = {
  email: string;
  password: string;
}

export async function signInRequest(data: SignInRequestData) {
  const request = await api.post("login", data)

  return request.data
}

export async function recoverUserInformation() {
  const response = await api.get('/me');
  return response.data;
}
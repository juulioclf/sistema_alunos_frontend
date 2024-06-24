import { api } from "./api";

export type StudentRequestData = {
  registration: string;
  firstName: string;
  lastName: string;
  email: string;
}

export async function getAllStudents() {
  const request = await api.get("student")

  return request.data
}

export async function getStudentByID(id: string) {
  const request = await api.get(`student/${id}`)

  return request.data
}

export async function updateStudent(id: string, data: any) {
  const request = await api.patch(`student/${id}`, data)

  return request.data
}

export async function deleteStudent(id: string) {
  const request = await api.delete(`student/${id}`)

  return request.data
}

export async function createStudent(data: StudentRequestData) {
  const request = await api.post("student", data)

  return request.data
}

// export async function recoverUserInformation() {
//   const response = await api.get('/me');
//   return response.data;
// }
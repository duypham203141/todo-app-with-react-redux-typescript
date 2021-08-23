import axios from "axios";
import { ITodo } from "../store/types";
export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 20000,
  headers: { "X-Custom-Header": "foobar" },
});
export const getTodosAPI = () => {
  return axiosInstance.get(`/todoList`);
};

export const postTodoAPI = (todo: ITodo) => {
  return axiosInstance.post(`/todoList`, todo);
};

export const deleteTodoAPI = (id: number) => {
  return axiosInstance.delete(`/todoList/${id}`);
};

export const putTodoAPI = (todo: ITodo) => {
  return axiosInstance.put(`/todoList/${todo.id}`, {
    title: todo.title,
    isCompleted: todo.isCompleted,
    deadline: todo.deadline,
  });
};

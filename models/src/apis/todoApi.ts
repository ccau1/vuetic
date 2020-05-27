import serverApi from "../apiClients/serverApi";
import { Todo } from "@/typings";

export const findTodos = async () => {
  const todos = await serverApi.get("todos");
  return todos.data;
};

export const addTodo = async (todo: Todo) =>
  (await serverApi.post("todos", todo)).data;

export const updateTodo = async (_id: string, todo: Todo) =>
  (await serverApi.put(`todos/${_id}`, todo)).data;

export const deleteTodo = async (todoId: string) =>
  (await serverApi.delete(`todos/${todoId}`)).data;

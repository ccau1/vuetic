import serverApi from '../apiClients/serverApi';

export const findTodos = async () => {
  const todos = await serverApi.get('todos');
  return todos.data;
}

export const addTodo = async (todo: any) => (await serverApi.post('todos', todo)).data;

export const updateTodo = async (_id: string, todo: any) => (await serverApi.put(`todos/${_id}`, todo)).data;

export const deleteTodo = async (todoId: string) => (await serverApi.delete(`todos/${todoId}`)).data;
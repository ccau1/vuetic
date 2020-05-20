import { ActionContext } from "vuex";
import { addTodo, findTodos, deleteTodo, updateTodo } from '../apis/todoApi';

interface Todo {
  _id: string;
  text: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TodoState {
  items: Todo[];
}

const state: TodoState = {
  items: []
};

const getters = {
  todos: (state: TodoState) => state.items
};

const actions = {
  async getTodos({ commit }: ActionContext<TodoState, any>) {
    const todos = await findTodos();
    commit("setTodos", todos);
  },
  async addTodo({ commit }: ActionContext<TodoState, any>, payload: {todo: Todo}) {
    console.log('payload', payload);
    
    const addedTodo = await addTodo(payload.todo);
    commit("addTodos", [addedTodo]);
  },
  async updateTodo({ commit, state }: ActionContext<TodoState, any>, payload: {_id: string, todo: Todo}) {
    const {_id, todo} = payload;
    const existingTodo = state.items.find(t => t._id === _id);
    if (!existingTodo) return;

    commit('updateTodo', {_id: _id, todo: {...existingTodo, ...todo}});
    try {
      const updatedTodo = await updateTodo(_id, todo);
      console.log('returneddd', updatedTodo, _id, todo);
      
      commit('updateTodo', {_id: _id, todo: updatedTodo});
    } catch (err) {
      commit('updateTodo', {_id: _id, todo: existingTodo});
    }
  },
  async deleteTodo({ commit }: ActionContext<TodoState, any>, payload: {_id: string}) {
    const deletedTodo = await deleteTodo(payload._id);
    commit("deleteTodo", {_id: payload._id});
  }
};

const mutations = {
  setTodos: (state: TodoState, todos: Todo[]) =>
    (state.items = todos),
  addTodos: (state: TodoState, todos: Todo[]) =>
    (state.items = state.items.concat(todos)),
  updateTodo: (state: TodoState, payload: {_id: string, todo: Todo}) =>
    (state.items = state.items.map(item => item._id === payload._id ? {...item, ...payload.todo} : item)),
  deleteTodo: (state: TodoState, payload: {_id: string}) =>
    (state.items = state.items.filter(item => item._id !== payload._id))
};

export default {
  state,
  getters,
  actions,
  mutations
};

import { API_BASE_URL } from '../env';
import pack from '../../package.json';
import axios from 'axios';

const p = pack as any;

export enum urls {
  todos = '/todos',
  addTodo = '/add-todo.json',
  deleteTodo = '/delete-todo.json',
}

export const api = axios.create({
  baseURL: 'http://localhost:4000',
});

export const getIncident = () => api.get<ITodo>(urls.todos);
export const addTodoCall = (data:ITodo ) => api.post(urls.todos, data);
// export const deleteTodoCall = (id:string ) => api.delete(urls.todos, { id });
export const deleteTodoCall = (id:string ) => {
  return axios.delete(
  `https://react-typescript-8f5ff-default-rtdb.firebaseio.com/todo/${id}.json`)};

export default {
  urls,
  postMessage,
  getIncident,
  // addTodoCall,
};

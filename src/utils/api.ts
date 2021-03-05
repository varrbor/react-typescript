import { API_BASE_URL } from '../env';
import pack from '../../package.json';
import axios from 'axios';

const p = pack as any;

export enum urls {
  todos = '/todo.json',
  addTodo = '/add-todo.json',
  deleteTodo = '/delete-todo.json',
}

export const api = axios.create({
  baseURL: 'https://react-typescript-8f5ff-default-rtdb.firebaseio.com/',
});

export const getIncident = () => api.get<ITodo>(urls.todos);
export const addTodoCall = (data:ITodo ) => api.post(urls.todos, data);
// export const deleteTodoCall = (id:string ) => api.delete(urls.todos, { id });
export const deleteTodoCall = (id:string ) => {
  console.log(id);
  console.log(`https://react-typescript-8f5ff-default-rtdb.firebaseio.com/todo/${id}.json`);
  return axios.delete(
  `https://react-typescript-8f5ff-default-rtdb.firebaseio.com/todo/${id}.json`)};

export default {
  urls,
  postMessage,
  getIncident,
  // addTodoCall,
};

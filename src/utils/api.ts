import { API_BASE_URL } from '../env';
import pack from '../../package.json';
import axios from 'axios';
import { IRegisterForm } from '../store/reducers/register';
const p = pack as any;

export enum urls {
  todos = '/todos',
  addTodo = '/add-todo',
  deleteTodo = '/delete-todo',
  fetchUser = '/api/auth/register',
}

export const api = axios.create({
  baseURL: 'http://localhost:4000',
});
export const getIncident = () => api.get<ITodo>(urls.todos);
export const addTodoCall = (data:ITodo ) => api.post(urls.addTodo, data);
// export const deleteTodoCall = (id:any ) => api.delete(urls.deleteTodo,  id );
export const deleteTodoCall = (id:string ) => {
  return axios.delete(
  `http://localhost:4000/delete-todo/${id}`)};
export const registerUser = (data:IRegisterForm ) => api.post(urls.fetchUser, data);

export default {
  urls,
  postMessage,
  getIncident,
  registerUser,
};

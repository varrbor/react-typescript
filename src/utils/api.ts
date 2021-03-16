import axios from 'axios';
import { API_BASE_URL } from '../env';
import pack from '../../package.json';
import { IRegisterForm } from '../store/reducers/register';
import { getAuthData } from './cookies';

const p = pack as any;

export enum urls {
  todos = '/todos',
  addTodo = '/add-todo',
  deleteTodo = '/delete-todo',
  fetchUser = '/api/auth/register',
  loginUser = '/api/auth/login',
}

export const api = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json',
  },
});

console.log(444, document.cookie);
api.interceptors.request.use(config => {
  const { token } = getAuthData();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const getTodos = () => api.get<ITodo>(urls.todos);
export const addTodoCall = (data: ITodo) => api.post(urls.addTodo, data);
// export const deleteTodoCall = (id:any ) => api.delete(urls.deleteTodo,  id );
export const deleteTodoCall = (id: string) => {
  return axios.delete(`http://localhost:4000/delete-todo/${id}`);
};
export const registerUser = (data: IRegisterForm) =>
  api.post(urls.fetchUser, data);
export const loginUser = (data: IRegisterForm) =>
  api.post(urls.loginUser, data);

export default {
  urls,
  postMessage,
  getTodos,
  registerUser,
  loginUser,
};

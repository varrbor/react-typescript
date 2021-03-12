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
  loginUser = '/api/auth/login',
}

export const api = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    "Content-Type": "application/json"
  }
});
export const getAuthData = () => {
  const jwtTokenCookie: RegExpMatchArray | null = document.cookie.match(
    `(^|; )jwtToken=([^;]*)`
  );
  const userIdCookie: RegExpMatchArray | null = document.cookie.match(
    `(^|; )userId=([^;]*)`
  );

  if (jwtTokenCookie) {
    const token: string = jwtTokenCookie[2];
    const userId: string = userIdCookie![2];

    return {
      token,
      userId,
    };
  }
  return {
    token: null,
    userId: null,
  };
};
console.log(444,document.cookie);
api.interceptors.request.use(config => {
  const token = getAuthData().token;
  console.log(5555,getAuthData().token);
  config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});

export const getIncident = () => api.get<ITodo>(urls.todos);
export const addTodoCall = (data:ITodo ) => api.post(urls.addTodo, data);
// export const deleteTodoCall = (id:any ) => api.delete(urls.deleteTodo,  id );
export const deleteTodoCall = (id:string ) => {
  return axios.delete(
  `http://localhost:4000/delete-todo/${id}`)};
export const registerUser = (data:IRegisterForm ) => api.post(urls.fetchUser, data);
export const loginUser = (data:IRegisterForm ) => api.post(urls.loginUser, data);

export default {
  urls,
  postMessage,
  getIncident,
  registerUser,
  loginUser,
};

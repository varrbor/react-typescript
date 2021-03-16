import React, { useEffect, Suspense } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import Todos from '../../components/Todos';
import NewTodo from '../../components/Newtodo';
import { getTodos } from '../../store/reducers/todos';
import Preloader from '../../components/Preloader';
import {
  fetchTodos,
  adTodoRequest,
  deleteTodoRequest,
} from '../../store/actions/todos';
import styles from './Todo.module.scss';
import { getApp } from '../../store/reducers/app';

const App: React.FC = () => {
  const { todos } = useSelector(getTodos, shallowEqual);
  const dispatch = useDispatch();
  const { authorized, isLoading } = useSelector(getApp, shallowEqual);

  useEffect(() => {
    let ignore = false;
    dispatch(fetchTodos());
    return () => {
      ignore = true;
    };
  }, []);

  const todoAddHandler = (text: string) => {
    dispatch(
      adTodoRequest({
        id: Math.random().toString(),
        text,
      })
    );
  };
  const todoDeleteHandler = (todoId: string) => {
    const updatedTodos = todos.filter(todo => todo._id !== todoId);
    dispatch(deleteTodoRequest({ id: todoId, text: updatedTodos }));
  };

  return (
    <div>
      <NewTodo onAddTodo={todoAddHandler} />
      <Todos items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;

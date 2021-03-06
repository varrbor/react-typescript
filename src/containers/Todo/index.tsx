import React, { useEffect, Suspense } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import Todos from '../../components/Todos';
import NewTodo from '../../components/Newtodo';
import { getTodos } from '../../store/reducers/todos';

import Preloader from '../../components/Preloader';


import { addTodo, deleteTodo, fetchTodos, adTodoRequest, deleteTodoRequest } from '../../store/actions/todos';
import { clearConfigCache } from 'prettier';

const App: React.FC = () => {

  const  todos = useSelector(getTodos, shallowEqual);
  console.log(11111, todos.todos);

  const dispatch = useDispatch();
  useEffect(() => {
    let ignore = false;
    console.log('useEffect');
    dispatch(
      fetchTodos()
    );
    return () => { ignore = true; }
  },[]);

  const todoAddHandler = (text: string) => {
    dispatch(
      adTodoRequest({
        id: Math.random().toString(),
        text,
      })
    );
  };
  const todoDeleteHandler = (todoId: string) => {
    const updatedTodos = todos.todos.filter(todo => todo.id !== todoId);
    dispatch(deleteTodoRequest({id: todoId, text: updatedTodos}));
  };

  return (
    <div>
      <NewTodo onAddTodo={todoAddHandler} />
      <Todos items={todos.todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;

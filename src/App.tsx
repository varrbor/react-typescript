import React, { useState } from 'react';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import {shallowEqual, useSelector, useDispatch} from "react-redux";
import {getTodos} from "./store/reducers/todos";
import { addTodo, deleteTodo } from './store/actions/todos';

const App: React.FC = () => {
  const   todos   = useSelector(getTodos, shallowEqual);

  const dispatch = useDispatch();

  const todoAddHandler = (text: string) => {
    console.log('todoAddHandler', text);
    dispatch(addTodo(
      {
        id: Math.random().toString(),
        text,
      }
    ));

  };
  const todoDeleteHandler = (todoId: string) => {
    dispatch(deleteTodo(
      todos.filter(todo => todo.id !== todoId)
    ));
  };

  return (
    <div>
      <NewTodo onAddTodo={todoAddHandler} />
      <Todos items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;

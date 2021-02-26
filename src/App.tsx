import React, { useState } from 'react';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';
import {shallowEqual, useSelector, useDispatch} from "react-redux";
import {getTodos} from "./store/reducers/todos";
import { read } from './store/actions/todos';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: Math.random().toString(), text: 'Start·the·course.' },
  ]);

  const  todos1  = useSelector(getTodos, shallowEqual);

  const dispatch = useDispatch();
  // console.log(111111, text);

  const todoAddHandler = (text: string) => {
    setTodos([
      ...todos,
      {
        id: Math.random().toString(),
        text,
      },
    ]);
  };
  const todoDeleteHandler = (todoId: string) => {
    // setTodos(todos.filter(todo => todo.id !== todoId));
    dispatch(read(todos.filter(todo => todo.id !== todoId)));
  };

  return (
    <div>
      <NewTodo onAddTodo={todoAddHandler} />
      <Todos items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;

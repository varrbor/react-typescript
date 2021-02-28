import React, { useState } from 'react';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';
import {shallowEqual, useSelector, useDispatch} from "react-redux";
import {getTodos} from "./store/reducers/todos";
import { addTodo, ADD_NEW_TODO } from './store/actions/todos';

const App: React.FC = () => {
  // const [todos, setTodos] = useState<Todo[]>([
  //   { id: Math.random().toString(), text: 'Start·the·course.' },
  // ]);

  const   todos   = useSelector(getTodos, shallowEqual);

  const dispatch = useDispatch();
  console.log(111111, todos);
  console.log(22222, typeof todos);

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
    // setTodos(todos.filter(todo => todo.id !== todoId));
    console.log(777)

  };

  return (
    <div>
      <NewTodo onAddTodo={todoAddHandler} />
      <Todos items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;

import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import { getTodos } from './store/reducers/todos';
import { addTodo, deleteTodo, fetchTodos } from './store/actions/todos';
import { clearConfigCache } from 'prettier';

const App: React.FC = () => {
  const todos = useSelector(getTodos, shallowEqual);

  console.log(55555,todos);
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
      addTodo({
        id: Math.random().toString(),
        text,
      })
    );
  };
  const todoDeleteHandler = (todoId: string) => {
    console.log(2222,todoId);
    console.log(2222,typeof todoId);
    dispatch(deleteTodo(todoId));
    // dispatch(deleteTodo(todos.filter(todo => todo.id !== todoId)));
  };

  return (
    <div>
      <NewTodo onAddTodo={todoAddHandler} />
      <Todos items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;

/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './TodoList.css';

interface TodosProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}
const Todos: React.FC<TodosProps> = props => {
  const { items } = props;
  console.log('items', items);
  return (
    <ul>
      {items.map(todo => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Todos;

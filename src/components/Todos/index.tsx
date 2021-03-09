/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import styles from './Todos.module.scss';


interface TodosProps {
  items: { _id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}
const Index: React.FC<TodosProps> = props => {
  const { items } = props;
  console.log(2222,items);
  return (
    <ul className={styles.root}>
      {items.map(todo => (
        <li key={todo._id}>
          <span>{todo.text}</span>
          <button onClick={props.onDeleteTodo.bind(null, todo._id)}>
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Index;

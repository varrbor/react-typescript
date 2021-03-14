/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import styles from './NewTodo.module.scss';

interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}

const Index: React.FC<NewTodoProps> = props => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current?.value as string;
    props.onAddTodo(enteredText);
  };

  return (
    <div className={styles.root}>
      <form  onSubmit={todoSubmitHandler}>
        <div className={styles.formControl}>
          <label>Todo Text</label>
          <input type="text" id="todo-text" ref={textInputRef} />
        </div>
        <button type="submit">ADD TODO</button>
      </form>
    </div>
  );
};

export default Index;

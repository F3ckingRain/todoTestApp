import React from 'react';

import styles from './TodosContainer.module.scss';
import useTodoState from '../../store/atoms/Todo/todoState.ts';
import TodoCard from '../../components/TodoCard/TodoCard.tsx';
import useTranslateTodos from "../../hooks/useTranslateTodos.ts";
const TodosContainer = () => {
  const [todos] = useTodoState();

  useTranslateTodos(todos);

  return (
    <div className={styles.todosContainer}>
      <div className={styles.window} id={'window'}>
        {todos.map((el, index) => (
          <TodoCard {...el} key={`${el.title}_${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default TodosContainer;

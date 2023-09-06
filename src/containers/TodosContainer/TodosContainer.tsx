import React, { useCallback, useState } from 'react';

import styles from './TodosContainer.module.scss';
import useTodoState from '../../store/atoms/Todo/todoState.ts';
import TodoCard from '../../components/TodoCard/TodoCard.tsx';

import useTranslatedTodos from '../../hooks/useTranslatedTodos.ts';
import AddButton from '../../ui/AddButton/AddButton.tsx';
import TodoModel from '../../models/TodoModel.ts';
import NewTodo from '../../components/NewTodo/NewTodo.tsx';
const TodosContainer = () => {
  const [showNewTodo, setShowNewTodo] = useState<boolean>(false);

  const [todos] = useTodoState();

  const { clearTodos } = TodoModel();

  const someActive = todos.some(el => el.active);
  const lastId = todos?.length - 1 || 0;
  const showClearBtn = !someActive && !showNewTodo;

  const clearTodosHandler = useCallback(() => {
    clearTodos();
  }, [clearTodos]);

  const openNewTodo = useCallback(() => {
    setShowNewTodo(true);
  }, []);

  const closeNewTodo = useCallback(() => {
    setShowNewTodo(false);
  }, []);

  useTranslatedTodos(someActive);

  return (
    <div className={styles.todosContainer}>
      <div className={styles.todosContainer__header}>
        <div>todos</div>

        <AddButton onClick={openNewTodo} additionalClassName={styles.addBtn} />
      </div>

      {showNewTodo ? (
        <NewTodo closeHandler={closeNewTodo} lastId={lastId} />
      ) : (
        <div className={styles.window} id={someActive ? 'window-active' : 'window'}>
          {todos.map((el, index) => (
            <TodoCard {...el} key={`${el.title}_${index + 1}`} />
          ))}
        </div>
      )}

      {showClearBtn && (
        <button className={styles.clearBtn} type={'button'} onClick={clearTodosHandler}>
          Clear closed
        </button>
      )}
    </div>
  );
};

export default TodosContainer;

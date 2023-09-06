import React, { ChangeEvent, FC, useCallback, useState } from 'react';

import styles from './NewTodo.module.scss';
import TodoModel from '../../models/TodoModel/TodoModel.ts';
import { ITodo } from '../../store/atoms/Todo/data.ts';
import { clsx } from 'clsx';
import NewTab from '../NewTab/NewTab.tsx';
import TodoList from '../../containers/TodoList/TodoList.tsx';
import AddButton from '../../ui/AddButton/AddButton.tsx';

interface NewTodoProps {
  lastId: number;
  closeHandler: () => void;
}

const NewTodo: FC<NewTodoProps> = ({ closeHandler, lastId }) => {
  const [todo, setTodo] = useState<ITodo>({
    id: lastId + 1,
    list: [],
    active: false,
    title: '',
  });
  const [showNewTab, setShowNewTab] = useState<boolean>(true);
  const [status, setStatus] = useState<boolean | null>(null);

  const { addTodo } = TodoModel();

  const checkStatus = useCallback(() => {
    const status = !!todo.title;

    setStatus(status);

    return { status };
  }, [todo]);

  const titleChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      setTodo({ ...todo, title: value });
    },
    [todo],
  );

  const listChangeHandler = useCallback(
    (text: string) => {
      setTodo({ ...todo, list: [{ status: 'inProcess', text }, ...todo.list] });
    },
    [todo],
  );

  const closeNewTab = useCallback(() => {
    setShowNewTab(false);
  }, []);

  const openNewTab = useCallback(() => {
    setShowNewTab(true);
  }, []);

  const addTodoHandler = useCallback(() => {
    const { status } = checkStatus();

    if (!status) return;

    addTodo(todo);

    return closeHandler();
  }, [todo, checkStatus, addTodo, closeHandler]);

  return (
    <div className={styles.newTodoContainer}>
      <div className={styles.newTodoContainer__header}>Создать новую заметку</div>

      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.title__text}>Название заметки:</div>

          <input className={styles.input} onChange={titleChangeHandler} />

          {status === false && (
            <div className={styles.errorText}>Вы должны ввести название заметки!</div>
          )}
        </div>

        <div className={styles.actions}>
          <div className={styles.actions__title}>
            <div>Список задач</div>

            <AddButton onClick={openNewTab} />
          </div>

          {showNewTab && (
            <NewTab closeHandler={closeNewTab} applyHandler={listChangeHandler} />
          )}

          <div className={styles.actions__list}>
            <TodoList list={todo.list} todoId={todo.id} />
          </div>
        </div>
      </div>

      <div className={styles.buttons}>
        <button
          className={clsx(styles.btn, styles.addBtn)}
          type={'button'}
          onClick={addTodoHandler}
        >
          Создать
        </button>

        <button className={clsx(styles.btn, styles.closeBtn)} onClick={closeHandler}>
          Отмена
        </button>
      </div>
    </div>
  );
};

export default NewTodo;

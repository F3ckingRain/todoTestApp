import React, { FC, useCallback } from 'react';
import { TodoType } from '../../types/todoTypes.ts';
import TodoModel from '../../models/TodoModel/TodoModel.ts';

import styles from './TodoItem.module.scss';
import Checkbox from '../../ui/Checkbox/Checkbox.tsx';
import { getStatus } from '../../utils/todoUtils.ts';
import { clsx } from 'clsx';
interface TodoItemProps extends TodoType {
  todoId: number;
  id: number;
}

const TodoItem: FC<TodoItemProps> = ({ text, status, id, todoId }) => {
  const { changeTodoItemStatus } = TodoModel();

  const boolStatus = getStatus(status);

  const statusHandler = useCallback(() => {
    changeTodoItemStatus({ todoId, listItemId: id });
  }, [changeTodoItemStatus, todoId, id]);

  return (
    <div className={styles.todoItem}>
      <Checkbox status={boolStatus} toggleStatus={statusHandler} />

      <div className={boolStatus ? clsx(styles.text, styles.text__done) : styles.text}>
        {text}
      </div>
    </div>
  );
};

export default TodoItem;

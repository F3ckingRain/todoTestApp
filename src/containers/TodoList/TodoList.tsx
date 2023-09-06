import React, { FC } from 'react';
import { TodoType } from '../../types/todoTypes.ts';

import styles from './TodoList.module.scss';
import TodoItem from '../../components/TodoItem/TodoItem.tsx';
interface TodoListProps {
  list: TodoType[];
  todoId: number;
}
const TodoList: FC<TodoListProps> = ({ list, todoId }) => {
  return (
    <div className={styles.todoList} data-testid={'TodoList'}>
      {list.map((el, index) => (
        <TodoItem {...el} id={index} todoId={todoId} key={`${el.text}_${index}`} />
      ))}
    </div>
  );
};

export default TodoList;

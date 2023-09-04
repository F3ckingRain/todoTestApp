import React, { FC, useCallback } from 'react';
import { TodoType } from '../../types/todoTypes.ts';
import TodoModel from '../../models/TodoModel.ts';

interface TodoItemProps extends TodoType {
  todoId: number;
  id: number;
}

const TodoItem: FC<TodoItemProps> = ({ text, status, id, todoId }) => {
  const { changeTodoItemStatus } = TodoModel();

  const statusHandler = useCallback(() => {
    changeTodoItemStatus({ todoId, listItemId: id });
  }, []);

  return <div></div>;
};

export default TodoItem;

import React, { FC, useCallback } from 'react';
import { ITodo } from '../../store/atoms/Todo/data.ts';
import TodoModel from '../../models/TodoModel.ts';
import Collapse from '../../ui/Collapse/Collapse.tsx';
import TodoList from '../../containers/TodoList/TodoList.tsx';
import Filters from '../Filters/Filters.tsx';
import { getCount, getFilteredTodos } from '../../utils/todoUtils.ts';
import useFilterState from '../../store/atoms/Filter/filterState.ts';

import styles from './TodoCard.module.scss'
import {clsx} from "clsx";

const TodoCard: FC<ITodo> = ({ active, list, id, title }) => {
  const [{ type }] = useFilterState();

  const { toggleActive } = TodoModel();

  const { count } = getCount(list);
  const filteredList = getFilteredTodos(list, type);

  const toggleActiveHandler = useCallback(() => {
    toggleActive({ todoId: id });
  }, [id, toggleActive]);

  return (
    <div className={active ? clsx(styles.todoCard , styles.todoCard__active) : styles.todoCard}>
      <Collapse active={active} toggleActive={toggleActiveHandler} title={title}>
        <TodoList list={filteredList} todoId={id} />

        {active && <Filters count={count} />}
      </Collapse>
    </div>
  );
};

export default TodoCard;

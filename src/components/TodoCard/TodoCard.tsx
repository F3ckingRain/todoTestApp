import React, { FC, useCallback, useState } from 'react';
import { ITodo } from '../../store/atoms/Todo/data.ts';
import TodoModel from '../../models/TodoModel/TodoModel.ts';
import Collapse from '../../ui/Collapse/Collapse.tsx';
import TodoList from '../../containers/TodoList/TodoList.tsx';
import Filters from '../Filters/Filters.tsx';
import { getCount, getFilteredTodos } from '../../utils/todoUtils.ts';
import useFilterState from '../../store/atoms/Filter/filterState.ts';

import styles from './TodoCard.module.scss';
import { clsx } from 'clsx';
import AddButton from '../../ui/AddButton/AddButton.tsx';
import NewTab from '../NewTab/NewTab.tsx';

const TodoCard: FC<ITodo> = ({ active, list, id, title }) => {
  const [showNewTab, setShowNewTab] = useState<boolean>(false);

  const [{ type }] = useFilterState();

  const { toggleActive, addActionForTodo } = TodoModel();

  const { count } = getCount(list);
  const filteredList = getFilteredTodos(list, type);

  const toggleActiveHandler = useCallback(() => {
    toggleActive({ todoId: id });
  }, [id, toggleActive]);

  const addActionHandler = useCallback(
    (text: string) => {
      addActionForTodo({ todoId: id, text });
    },
    [id, addActionForTodo],
  );

  const showNewTabHandler = useCallback(() => {
    setShowNewTab(true);
  }, []);

  const closeNewTabHandler = useCallback(() => {
    setShowNewTab(false);
  }, []);

  return (
    <div
      className={
        active ? clsx(styles.todoCard, styles.todoCard__active) : styles.todoCard
      }
      data-testid={`OpenCard`}
    >
      <Collapse
        active={active}
        toggleActive={toggleActiveHandler}
        title={title}
        dataTestId={`OpenCard-btn`}
      >
        <div className={styles.content}>
          <div
            className={
              showNewTab ? clsx(styles.newTab, styles.newTab__active) : styles.newTab
            }
          >
            {showNewTab && (
              <NewTab closeHandler={closeNewTabHandler} applyHandler={addActionHandler} />
            )}
          </div>

          <TodoList list={filteredList} todoId={id} />

          <Filters count={count} todoId={id} />
        </div>
      </Collapse>

      <AddButton
        onClick={showNewTabHandler}
        additionalClassName={active ? clsx(styles.add, styles.add__active) : styles.add}
        dataTestId={'OpenNewTab'}
      />
    </div>
  );
};

export default TodoCard;

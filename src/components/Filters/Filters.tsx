import React, { FC, useCallback, useEffect, useRef } from 'react';
import FilterModel from '../../models/FilterModel.ts';
import useFilterState from '../../store/atoms/Filter/filterState.ts';
import { clsx } from 'clsx';
import styles from './Filters.module.scss';
import sortTypeArr from './data.ts';
import { FilterType } from '../../store/atoms/Filter/data.ts';
import TodoModel from '../../models/TodoModel.ts';

interface FilterProps {
  count: number;
  todoId: number;
}

const Filters: FC<FilterProps> = ({ count, todoId }) => {
  const textRef = useRef<HTMLDivElement>(null);

  const [{ type }] = useFilterState();

  const { setFilterType } = FilterModel();
  const { clearCompleted } = TodoModel();

  const sortTypeHandler = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const filterType = e.currentTarget.innerHTML as FilterType;

      setFilterType(filterType);
    },
    [setFilterType],
  );

  const clearCompletedHandler = useCallback(() => {
    clearCompleted({ todoId });
  }, [clearCompleted, todoId]);

  useEffect(() => {
    if (!textRef) return;
    if (!textRef.current) return;

    const handler = setTimeout(() => {
      if (!textRef) return;
      if (!textRef.current) return;

      textRef.current.className = styles.animated;
      textRef.current.innerHTML = `${count}`;
    }, 300);

    textRef.current.className = '';

    return () => clearTimeout(handler);
  }, [textRef, count]);

  return (
    <div className={styles.filtersBlock}>
      <div className={styles.count}>
        <div ref={textRef}></div>

        <div>items left</div>
      </div>

      <div className={styles.sortBlock}>
        {sortTypeArr.map((el, index) => (
          <button
            onClick={sortTypeHandler}
            className={el === type ? clsx(styles.btnSort, styles.active) : styles.btnSort}
            key={`${el}_${index + 1}`}
          >
            {el}
          </button>
        ))}
      </div>

      <button
        className={clsx(styles.btnSort, styles.clear)}
        onClick={clearCompletedHandler}
      >
        Clear completed
      </button>
    </div>
  );
};

export default Filters;

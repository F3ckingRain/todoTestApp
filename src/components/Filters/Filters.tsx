import React, { FC, useCallback } from 'react';
import FilterModel from '../../models/FilterModel.ts';
import useFilterState from '../../store/atoms/Filter/filterState.ts';
import { clsx } from 'clsx';
import styles from './Filters.module.scss';
import sortTypeArr from './data.ts';
import { FilterType } from '../../store/atoms/Filter/data.ts';

interface FilterProps {
  count: number;
}

const Filters: FC<FilterProps> = ({ count }) => {
  const [{ type }] = useFilterState();

  const { setFilterType } = FilterModel();

  const sortTypeHandler = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const filterType = e.currentTarget.innerHTML as FilterType;

      setFilterType(filterType);
    },
    [setFilterType],
  );

  return (
    <div>
      <div>{`${count} items left`}</div>

      <div>
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

      <button>Clear completed</button>
    </div>
  );
};

export default Filters;

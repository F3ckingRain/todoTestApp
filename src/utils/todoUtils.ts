import { TodoType } from '../types/todoTypes.ts';
import { FilterType } from '../store/atoms/Filter/data.ts';

export const getCount = (list: TodoType[]): { count: number } => {
  let count: number = 0;

  if (!list) return { count };

  list.forEach(el => {
    if (el.status !== 'done') return;

    count += 1;
  });

  return { count };
};

export const getFilteredTodos = (
  list: TodoType[],
  filterType: FilterType,
): TodoType[] => {
  switch (filterType) {
    case 'All':
      return [...list];

    case 'Active':
      return [...list].filter(el => el.status === 'inProcess');

    case 'Completed':
      return [...list].filter(el => el.status === 'done');

    default:
      return [...list];
  }
};

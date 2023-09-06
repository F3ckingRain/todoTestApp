import { describe, expect, test } from 'vitest';
import initialState from '../../src/store/atoms/Todo/data';
import { getCount, getFilteredTodos } from '../../src/utils/todoUtils';

describe('FilterModel', () => {
  const todos = initialState;

  test('todosFilterByActive', () => {
    const { list } = todos[0];

    const filtered = getFilteredTodos(list, 'Active');

    expect(filtered.length).toBeLessThan(todos.length);
    expect(filtered.some(el => el.status === 'done')).toEqual(false);
  });

  test('todoFilterByAll', () => {
    const { list } = todos[1];

    const filtered = getFilteredTodos(list, 'All');

    expect(filtered.length).toEqual(todos.length);
  });

  test('getCount', () => {
    const { list } = todos[2];

    const { count } = getCount(list);

    expect(count).toEqual(2);
  });
});

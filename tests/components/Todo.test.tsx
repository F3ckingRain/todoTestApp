import React from 'react';
import { describe, expect, test } from 'vitest';
import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import TodoCard from '../../src/components/TodoCard/TodoCard.tsx';
import { todoState } from '../../src/store/atoms/Todo/todoState.ts';

import styles from '../../src/components/NewTab/NewTab.module.scss';

describe('TodoItem', () => {
  const { result } = renderHook(() => useRecoilValue(todoState), { wrapper: RecoilRoot });

  render(
    <RecoilRoot>
      <TodoCard {...result.current[0]} />
    </RecoilRoot>,
  );

  test('ShowTab', () => {
    const card = screen.getByTestId('OpenCard');

    const newTab = [...card.children].filter(
      el => el.className.includes('newTab') && el.className.includes('active'),
    );

    expect(newTab.length).toEqual(0);

    const btnShow = screen.getByTestId('OpenCard-btn');

    expect(btnShow).exist;
  });

  test('AddNewActions', () => {
    const btnShow = screen.getByTestId('OpenCard-btn');

    fireEvent.click(btnShow);

    const { list } = result.current[0];

    const btnOpen = screen.getByTestId('OpenNewTab');

    fireEvent.click(btnOpen);

    const newTab = [...document.getElementsByClassName(styles.newTabContainer)][0];

    const input = screen.getByTestId('newTab-Input') as HTMLInputElement;

    expect(newTab).exist;
    expect(input).exist;

    fireEvent.change(input, { target: { value: 'FirstAction' } });

    expect(input.value).toBe('FirstAction');

    const secondList = [
      { status: 'inProcess', text: 'FirstAction' },
      ...result.current[0].list,
    ];

    fireEvent.blur(input);

    const applyBtn = screen.getByTestId('applyNewAction') as HTMLButtonElement;

    expect(applyBtn).exist;

    fireEvent.click(applyBtn);

    const tab = [...document.getElementsByClassName(styles.newTabContainer)][0];

    expect(tab).not.exist;

    expect(list.length).lessThan(secondList.length);
  });
});

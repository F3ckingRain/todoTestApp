import React from 'react';
import { expect, test } from 'vitest';
import { render, renderHook } from '@testing-library/react';
import useTranslatedTodos from '../../src/hooks/useTranslatedTodos';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import TodosContainer from '../../src/containers/TodosContainer/TodosContainer.tsx';

test('TranslationWorks', () => {
  render(
    <BrowserRouter>
      <RecoilRoot>
        <TodosContainer />
      </RecoilRoot>
    </BrowserRouter>,
  );
  const wrapper = () => (
    <BrowserRouter>
      <RecoilRoot>
        <TodosContainer />
      </RecoilRoot>
    </BrowserRouter>
  );

  const window = document.getElementById('window')!;

  const { children } = window;

  const arr = Array.from(children) as HTMLDivElement[];

  window.id = 'window-active';

  arr.forEach((el, index) => {
    if (index === 0) return { ...el, className: (el.className += 'active') };

    return el;
  });

  renderHook(() => useTranslatedTodos(true), { wrapper });

  const activeWindow = document.getElementById('window-active')!;

  expect(activeWindow).exist;

  const secondChild = activeWindow.children;

  const secondArr = Array.from(secondChild) as HTMLDivElement[];

  const secondArrStyle = secondArr.filter(el => el.className.includes('active'));

  expect(arr).not.toEqual(secondArrStyle);
});

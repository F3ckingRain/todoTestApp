import React from 'react';

import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import TodosContainer from '../../src/containers/TodosContainer/TodosContainer.tsx';

describe('TestContainer', () => {
  render(
    <BrowserRouter>
      <RecoilRoot>
        <TodosContainer />
      </RecoilRoot>
    </BrowserRouter>,
  );

  test('window-hide', () => {
    const btnAdd = screen.getByTestId('addNewTodoBtn');

    const window = document.getElementById('window')!;

    expect(window).exist;
    expect(btnAdd).exist;

    fireEvent.click(btnAdd);

    const newWindow = document.getElementById('window');

    expect(newWindow).not.exist;

    fireEvent.click(btnAdd);

    expect(newWindow).not.exist;
  });

  test('openCard', () => {
    render(
      <RecoilRoot>
        <TodosContainer />
      </RecoilRoot>,
    );

    const collapse = screen.getAllByTestId('OpenCard-btn')!;

    fireEvent.click(collapse[0]);

    const window = document.getElementById('window-active');

    expect(window).exist;
  });
});

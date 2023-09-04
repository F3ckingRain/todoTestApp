import { atom, useRecoilState } from 'recoil';
import initialState from './data.ts';

export const todoState = atom({
  key: 'todoState',
  default: initialState,
});

const useTodoState = () => useRecoilState(todoState);

export default useTodoState;

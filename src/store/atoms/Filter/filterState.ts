import { atom, useRecoilState } from 'recoil';
import initialState from './data.ts';

export const filterState = atom({
  key: 'filterSTate',
  default: initialState,
});

const useFilterState = () => useRecoilState(filterState);

export default useFilterState;

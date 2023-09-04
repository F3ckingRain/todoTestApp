import { TodoType } from '../../../types/todoTypes.ts';

export type ITodo = {
  title: string;
  active: boolean;
  id: number;
  list: TodoType[];
};

const initialState: ITodo[] = [
  { title: 'What needs to be done?', active: false, list: [], id: 1 },
  { title: 'All you need for happiness', active: false, list: [], id: 2 },
  { title: 'Is give me this offer :)', active: false, list: [], id: 3 },

];

export default initialState;

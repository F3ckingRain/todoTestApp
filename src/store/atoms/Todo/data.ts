import { TodoType } from '../../../types/todoTypes.ts';

export type ITodo = {
  title: string;
  active: boolean;
  id: number;
  list: TodoType[];
};

const initialState: ITodo[] = [
  {
    title: 'What needs to be done?',
    active: false,
    list: [
      { status: 'inProcess', text: 'Тестовое задание' },
      { status: 'done', text: 'Прекрасный код' },
      { status: 'inProcess', text: 'Покрытие тестами' },
    ],
    id: 1,
  },
  {
    title: 'All you need for happiness',
    active: false,
    list: [
      { status: 'done', text: 'Тестовое задание' },
      { status: 'inProcess', text: 'Прекрасный код' },
      { status: 'inProcess', text: 'Покрытие тестами' },
    ],
    id: 2,
  },
  {
    title: 'Is give me this offer :)',
    active: false,
    list: [
      { status: 'inProcess', text: 'Тестовое задание' },
      { status: 'inProcess', text: 'Прекрасный код' },
      { status: 'done', text: 'Покрытие тестами' },
    ],
    id: 3,
  },
];

export default initialState;

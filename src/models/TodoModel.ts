import useTodoState from '../store/atoms/Todo/todoState.ts';
import { TodoType } from '../types/todoTypes.ts';
import {ITodo} from "../store/atoms/Todo/data.ts";

type TodoActionType = {
  changeStatus: ({ todoId, listItemId }: { todoId: number; listItemId: number }) => void;
  toggleActive: ({ todoId }: { todoId: number }) => void;
  clearCompleted: ({ todoId }: { todoId: number }) => void;
  addActionForTodo: ({ todoId, text }: { todoId: number; text: string }) => void;
  addTodo: (todo: ITodo) => void;
};
const TodoModel = () => {
  const [state, setState] = useTodoState();

  const changeTodoItemStatus: TodoActionType['changeStatus'] = ({
    todoId,
    listItemId,
  }) => {
    const newState = [...state].map(el => {
      if (el.id === todoId) {
        const list: TodoType[] = el.list.map((elem, index) => {
          if (index === listItemId)
            return { ...elem, status: elem.status === 'done' ? 'inProcess' : 'done' };
          return elem;
        });

        return { ...el, list };
      }

      return el;
    });

    setState(newState);
  };

  const toggleActive: TodoActionType['toggleActive'] = ({ todoId }) => {
    const newState = [...state].map(el => {
      if (el.id === todoId) return { ...el, active: !el.active };

      return el;
    });

    return setState(newState);
  };

  const clearCompleted: TodoActionType['clearCompleted'] = ({ todoId }) => {
    const newState = [...state].map(el => {
      if (el.id === todoId)
        return { ...el, list: el.list.filter(elem => elem.status !== 'done') };

      return { ...el };
    });

    setState(newState);
  };

  const addTodo: TodoActionType['addTodo'] = (todo) => {
    setState([todo, ...state]);
  };

  const addActionForTodo: TodoActionType['addActionForTodo'] = ({ todoId, text }) => {
    const newAction: TodoType = { status: 'inProcess', text };

    const newState = [...state].map(el => {
      if (el.id === todoId) return { ...el, list: [newAction, ...el.list] };

      return el;
    });

    setState(newState);
  };

  const clearTodos = () => {
    const newState = [...state].filter(el =>
      el.list.some(elem => elem.status !== 'done'),
    );

    setState(newState);
  };

  return {
    changeTodoItemStatus,
    toggleActive,
    clearCompleted,
    addTodo,
    addActionForTodo,
    clearTodos,
  };
};

export default TodoModel;

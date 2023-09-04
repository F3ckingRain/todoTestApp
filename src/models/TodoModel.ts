import useTodoState from '../store/atoms/Todo/todoState.ts';

type TodoActionType = {
  changeStatus: ({ todoId, listItemId }: { todoId: number; listItemId: number }) => void;
  toggleActive: ({ todoId }: { todoId: number }) => void;
};
const TodoModel = () => {
  const [state, setState] = useTodoState();

  const changeTodoItemStatus: TodoActionType['changeStatus'] = ({
    todoId,
    listItemId,
  }) => {};

  const toggleActive: TodoActionType['toggleActive'] = ({ todoId }) => {
    const newState = [...state].map(el => {
      if (el.id === todoId) return { ...el, active: !el.active };

      return el;
    });

    return setState(newState);
  };

  return { changeTodoItemStatus, toggleActive };
};

export default TodoModel;

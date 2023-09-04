export type TodoStatusType = 'done' | 'inProcess';

export type TodoType = {
  text: string;
  status: TodoStatusType;
};

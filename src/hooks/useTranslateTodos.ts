import {ITodo} from "../store/atoms/Todo/data.ts";
import {useEffect, useRef} from "react";

const useTranslateTodos = (todos: ITodo[]) => {
  const ref = useRef(todos);

  const translates = todos.map((el, index) => {
    if (el.active) return 'translate3d(0, 0, 0)';

    return `translate3d(${index + 10}px, 0 0)`
  })

  useEffect(() => {
    if (JSON.stringify(todos) === JSON.stringify(ref.current)) return;

    const windowDiv = document.getElementById('window')!;
    const arr = Array.from( windowDiv!.children) as HTMLDivElement[];

    if (todos.some(el => el.active)) windowDiv.style.display = 'block';
    else windowDiv.style.display = 'flex';

    [...arr].forEach(((el, index) => {
      const style = `transform: ${translates[index]}; position: absolute; top: ${index * 1.1}%; z-index: ${3 - index}`;

      el.setAttribute('style', style)
    }));

    ref.current = todos;
  },[translates, ref, todos])
};

export default useTranslateTodos;
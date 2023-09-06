import { useEffect } from 'react';

const useTranslatedTodos = (translate?: boolean) => {
  useEffect(() => {
    if (translate) {
      const window = document.getElementById('window-active')!;

      const { children } = window;

      const translateArr = [...children].filter(el => !el.className.includes('active'));

      translateArr.forEach((el, index) => {
        const elem = el as HTMLDivElement;

        if (index > 2) return;

        elem.style.position = 'absolute';
        elem.style.top = `${4 * (index + 1)}px`;
        elem.style.width = `${100 - 2 * (index + 1)}%`;
        elem.style.minHeight = '470px';
        elem.style.zIndex = `${10 - 2 * (index + 1)}`;
      });
    } else {
      const window = document.getElementById('window')!;

      const { children } = window;

      const translateArr = [...children].filter(el => !el.className.includes('active'));

      translateArr.forEach(el => {
        const elem = el as HTMLDivElement;

        elem.removeAttribute('style');
      });
    }
  }, [translate]);
};

export default useTranslatedTodos;

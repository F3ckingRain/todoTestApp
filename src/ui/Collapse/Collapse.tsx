import React, { FC } from 'react';

import styles from './Collapse.module.scss';
import { clsx } from 'clsx';

interface CollapseProps {
  title: string;
  children: React.ReactNode;
  active: boolean;
  toggleActive: () => void;
}
const Collapse: FC<CollapseProps> = ({ title, children, toggleActive, active }) => {
  return (
    <div className={styles.collapse}>
      <button
        className={
          active
            ? clsx(styles.collapse__btn, styles.collapse__btnActive)
            : styles.collapse__btn
        }
        onClick={toggleActive}
      >
        {title}
      </button>

      <div
        className={
          active
            ? clsx(styles.content, styles.content__acitve)
            : clsx(styles.content, styles.content__hidden)
        }
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;

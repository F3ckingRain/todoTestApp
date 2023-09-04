import React, { FC } from 'react';

import styles from './Checkbox.module.scss';
import { clsx } from 'clsx';

interface CheckboxProps {
  status: boolean;
  toggleStatus: () => void;
  disabled?: boolean;
}

const Checkbox: FC<CheckboxProps> = ({ status, toggleStatus, disabled }) => {
  return (
    <button
      className={status ? clsx(styles.checkbox, styles.active) : styles.checkbox}
      onClick={toggleStatus}
      disabled={disabled}
    ></button>
  );
};

export default Checkbox;

import React, { FC, useCallback, useEffect, useState } from 'react';

import styles from './Checkbox.module.scss';
import { clsx } from 'clsx';

interface CheckboxProps {
  status?: boolean;
  toggleStatus?: () => void;
  disabled?: boolean;
}

const Checkbox: FC<CheckboxProps> = ({ status, toggleStatus, disabled }) => {
  const [active, setActive] = useState<boolean>(status || false);

  const activeToggle = useCallback(() => {
    if (toggleStatus) return toggleStatus();

    return setActive(prevState => !prevState);
  }, [toggleStatus]);

  useEffect(() => {
    if (status === undefined) return;

    setActive(status);
  }, [status]);

  return (
    <div className={styles.checkboxContainer}>
      <button
        className={active ? clsx(styles.checkbox, styles.active) : styles.checkbox}
        onClick={activeToggle}
        disabled={disabled}
      />
    </div>
  );
};

export default Checkbox;

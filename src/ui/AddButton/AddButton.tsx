import React, { FC } from 'react';

import styles from './AddButton.module.scss';
import { clsx } from 'clsx';
interface AddButtonProps {
  onClick: () => void;
  additionalClassName?: string;
  dataTestId?: string;
}
const AddButton: FC<AddButtonProps> = ({ onClick, additionalClassName, dataTestId }) => {
  return (
    <div className={clsx(styles.addButtonContainer, additionalClassName)}>
      <button
        className={styles.add}
        type={'button'}
        onClick={onClick}
        data-testid={dataTestId}
      />
    </div>
  );
};

export default AddButton;

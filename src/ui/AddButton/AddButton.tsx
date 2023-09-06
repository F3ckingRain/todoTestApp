import React, { FC } from 'react';

import styles from './AddButton.module.scss';
import { clsx } from 'clsx';
interface AddButtonProps {
  onClick: () => void;
  additionalClassName?: string;
}
const AddButton: FC<AddButtonProps> = ({ onClick, additionalClassName }) => {
  return (
    <div className={clsx(styles.addButtonContainer, additionalClassName)}>
      <button className={styles.add} type={'button'} onClick={onClick} />
    </div>
  );
};

export default AddButton;

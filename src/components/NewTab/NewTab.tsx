import React, { ChangeEvent, FC, useCallback, useState } from 'react';

import styles from './NewTab.module.scss';
import { clsx } from 'clsx';
interface NewTabProps {
  closeHandler: () => void;
  applyHandler: (text: string) => void;
}
const NewTab: FC<NewTabProps> = ({ applyHandler, closeHandler }) => {
  const [value, setValue] = useState<string>('');
  const [status, setStatus] = useState<boolean | null>(null);

  const checkStatus = useCallback(() => {
    const checkedStatus = !!value;

    setStatus(checkedStatus);

    return { checkedStatus };
  }, [value]);

  const apply = useCallback(() => {
    const { checkedStatus } = checkStatus();

    if (!checkedStatus) return;

    applyHandler(value);

    return closeHandler();
  }, [checkStatus, value, applyHandler, closeHandler]);

  const onBlur = useCallback(() => {
    checkStatus();
  }, [checkStatus]);

  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setValue(value);
  }, []);

  return (
    <div className={styles.newTabContainer}>
      <div className={styles.content}>
        <div>Введите название новой задачи:</div>

        <input
          className={styles.input}
          onBlur={onBlur}
          onChange={changeHandler}
          type={'text'}
          data-testid={'newTab-Input'}
        />

        {status === false && (
          <div className={styles.error}>Вы должны ввести название задачи!</div>
        )}
      </div>

      <div className={styles.btns}>
        <button
          onClick={apply}
          className={clsx(styles.btn, styles.applyBtn)}
          data-testid={'applyNewAction'}
        />

        <button onClick={closeHandler} className={clsx(styles.btn, styles.removeBtn)} />
      </div>
    </div>
  );
};

export default NewTab;

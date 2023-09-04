import React, { FC } from 'react';

import styles from './Wrapper.module.scss';
interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return <section className={styles.wrapper}>{children}</section>;
};

export default Wrapper;

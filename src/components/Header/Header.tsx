import React, { useCallback } from 'react';

import styles from './Header.module.scss';
import { useNavigateWithParams } from '../../hooks/useNavigateWithParams.ts';
const Header = () => {
  const navigate = useNavigateWithParams();

  const logoClickHandler = useCallback(() => {
    navigate('/');

    window.scroll({ top: 0, behavior: 'smooth' });
  }, [navigate]);

  return (
    <header className={styles.header}>
      <button className={styles.header__logo} onClick={logoClickHandler}>
        Todos
      </button>
    </header>
  );
};

export default Header;

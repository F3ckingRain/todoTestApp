import React, { useCallback } from 'react';

import styles from './Header.module.scss';
import { useNavigateWithParams } from '../../hooks/useNavigateWithParams.ts';
import { clsx } from 'clsx';
const Header = () => {
  const navigate = useNavigateWithParams();

  const logoClickHandler = useCallback(() => {
    navigate('/');

    window.scroll({ top: 0, behavior: 'smooth' });
  }, [navigate]);

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <button
          className={clsx(styles.header__logo, styles.animatedText)}
          onClick={logoClickHandler}
        >
          Todos
        </button>

        <div className={styles.socials}>
          <a
            href={'mailto: vprosolupov1@gmail.com'}
            className={clsx(styles.link, styles.animatedText)}
            target={'_blank'}
          >
            Email
          </a>

          <a
            href={'https://t.me/F3ckingRain'}
            className={clsx(styles.link, styles.animatedText)}
            target={'_blank'}
          >
            Telegram
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

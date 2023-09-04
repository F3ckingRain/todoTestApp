import React from 'react';

import styles from './App.module.scss';
import Router from '../router/Router.tsx';
function App() {
  return (
    <main id={'main'} className={styles.main}>
      <Router />
    </main>
  );
}

export default App;

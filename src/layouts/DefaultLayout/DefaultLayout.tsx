import React from 'react';

import { useOutlet } from 'react-router-dom';
import Header from '../../components/Header/Header.tsx';

const DefaultLayout = () => {
  const outlet = useOutlet();

  return (
    <>
      <Header />

      {outlet}
    </>
  );
};

export default DefaultLayout;

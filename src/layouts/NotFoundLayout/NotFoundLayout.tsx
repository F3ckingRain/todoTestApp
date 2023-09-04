import React from 'react';

import { useOutlet } from 'react-router-dom';
const NotFoundLayout = () => {
  const outlet = useOutlet();

  return <>{outlet}</>;
};

export default NotFoundLayout;

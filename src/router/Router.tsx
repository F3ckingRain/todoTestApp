import React from 'react';

import { useRoutes } from 'react-router';
import HomePage from '../pages/HomePage/HomePage.tsx';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.tsx';
import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout.tsx';
import NotFoundLayout from '../layouts/NotFoundLayout/NotFoundLayout.tsx';
const Router = () =>
  useRoutes([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [{ path: '', element: <HomePage /> }],
    },
    {
      path: '*',
      element: <NotFoundLayout />,
      children: [{ path: '', element: <NotFoundPage /> }],
    },
  ]);

export default Router;

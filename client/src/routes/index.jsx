import React, { lazy, Suspense } from 'react';

import { homeRoutes } from './homeRoutes';
import { userRoutes } from './userRoutes';
import { mediaRoutes } from './mediaRoutes';
import { aboutRoutes } from './aboutRoutes';
import { SignUp } from '@/pages';
import { signupAction } from '@/pages/auth/SignUp';
import LoadingSpinner from '@/components/loaders/LoadingSpinner';
import SignIn, { signinAction } from '@/pages/auth/SignIn';
import VarifyEmail from '@/pages/auth/VarifyEmail';

const HomeLayout = lazy(() => import('@/layouts/HomeLayout'));

export const routes = [
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <HomeLayout />
      </Suspense>
    ),
    children: [
      ...homeRoutes,
      ...userRoutes,
      ...mediaRoutes,
      ...aboutRoutes,
    ],
  },
  {
    path: '/auth/sign-up',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <SignUp />
      </Suspense>
    ),
    action: signupAction
  },
  {
    path: '/auth/sign-in',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <SignIn />
      </Suspense>
    ),
    action: signinAction
  },
  // {
  //   path: '/auth/varify-email',
  //   element: (
  //     <Suspense fallback={<LoadingSpinner />}>
  //       <VarifyEmail />
  //     </Suspense>
  //   ),
  //   action: varifyEmailAction
  // }
];

import React, { lazy, Suspense } from 'react';
import { SignUp } from '@/pages';
import { signupAction } from '@/pages/auth/SignUp';
import LoadingSpinner from '@/components/loaders/LoadingSpinner';
import SignIn, { signinAction } from '@/pages/auth/SignIn';
import { VerifyEmailAddres } from '@/pages/auth/VerifyEmailAddres';

export const authRoutes = [
    {
        path: '/auth/sign-up',
        element: (
            <Suspense fallback={<LoadingSpinner />}>
                <SignUp />
            </Suspense>
        ),
        action: signupAction,
    },
    {
        path: '/auth/sign-in',
        element: (
            <Suspense fallback={<LoadingSpinner />}>
                <SignIn />
            </Suspense>
        ),
        action: signinAction,
    },
    {
        path: '/user/verify-email',
        element: (
            <Suspense fallback={<LoadingSpinner />}>
                <VerifyEmailAddres />
            </Suspense>
        ),
    },
];

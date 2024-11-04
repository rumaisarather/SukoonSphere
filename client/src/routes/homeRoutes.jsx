import React, { lazy, Suspense } from 'react';
const Home = lazy(() => import('../pages/Home'));
const QaSection = lazy(() => import('../pages/QaSection/QaSection'));
const Articles = lazy(() => import('../pages/articles/Articles'));
const Posts = lazy(() => import('../pages/posts/Posts'));
const Answer = lazy(() => import('../pages/answer/Answer'));
const Article = lazy(() => import('../pages/articles/Article'));

// Keep the loader as is
import { ArticlesLoader } from '../pages/articles/Articles';
import LoadingSpinner from '@/components/loaders/LoadingSpinner';
import { postsAction, postsLoader } from '@/pages/posts/Posts';

export const homeRoutes = [
    {
        index: true,
        element: (
            <Suspense fallback={<LoadingSpinner />}>
                <Home />
            </Suspense>
        ),
    },
    {
        path: '/QA-section',
        element: (
            <Suspense fallback={<LoadingSpinner />}>
                <QaSection />
            </Suspense>
        ),
    },
    {
        path: '/answer',
        element: (
            <Suspense fallback={<LoadingSpinner />}>
                <Answer />
            </Suspense>
        ),
    },
    {
        path: '/articles',
        element: (
            <Suspense fallback={<LoadingSpinner />}>
                <Articles />
            </Suspense>
        ),
        loader: ArticlesLoader,
    },
    {
        path: '/articles/article',
        element: (
            <Suspense fallback={<LoadingSpinner />}>
                <Article />
            </Suspense>
        ),
    },
    {
        path: '/Posts',
        element: (
            <Suspense fallback={<LoadingSpinner />}>
                <Posts />
            </Suspense>
        ),
        action: postsAction,
        loader: postsLoader,
    },
];

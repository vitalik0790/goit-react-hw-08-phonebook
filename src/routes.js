import { lazy } from 'react';

export default [
    {
        path: '/',
        label: 'Home',
        exact: true,
        component: lazy(() => import('./views/HomeView')),
    },
    {
        path: '/register',
        label: 'Register',
        exact: true,
        component: lazy(() => import('./views/RegisterView')),
    },
    {
        path: '/login',
        label: 'Login',
        exact: true,
        component: lazy(() => import('./views/LoginView')),
    },
    {
        path: '/contacts',
        label: 'Contacts',
        exact: true,
        component: lazy(() => import('./views/ContactsView')),
    },
];
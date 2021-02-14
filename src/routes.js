import { lazy } from 'react';

// eslint-disable-next-line
export default [
    {
        path: '/',
        label: 'Home',
        exact: true,
        component: lazy(() => import('./views/HomeView')),
        private: false,
        restricted: false,
    },
    {
        path: '/register',
        label: 'Register',
        exact: true,
        component: lazy(() => import('./views/RegisterView')),
        private: false,
        restricted: true,
    },
    {
        path: '/login',
        label: 'Login',
        exact: true,
        component: lazy(() => import('./views/LoginView')),
        private: false,
        restricted: true,
    },
    {
        path: '/contacts',
        label: 'Contacts',
        exact: true,
        component: lazy(() => import('./views/ContactsView')),
        private: true,
        restricted: false,
    },
];
import React from 'react';
import Home from './components/home/Home';
import Tours from './components/tours/Tours';
import TourDetail from './components/tour-detail/TourDetail';
import Checkout from './components/checkout/Checkout';
import SignIn from './components/login/SignIn';
import SignUp from './components/login/SignUp';
import MyAccount from './components/my-account/MyAccount';
import NotFound from './components/NotFound';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/tours/:id',
        exact: false,
        main: ({ match }) => <Tours match={match}/>
    },
    {
        path: '/tour-detail/:id',
        exact: false,
        main: ({ match }) => <TourDetail match={match}/>
    },
    {
        path: '/checkout',
        exact: false,
        main: () => <Checkout />
    },
    {
        path: '/sign-in',
        exact: false,
        main: () => <SignIn />
    },
    {
        path: '/sign-up',
        exact: false,
        main: () => <SignUp />
    },
    {
        path: '/my-account',
        exact: false,
        main: () => <MyAccount />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];

export default routes;
export default [
    {
        key: 'home-page',
        path: '/',
        redirect: '/foods',
    },
    {
        key: 'foods',
        path: '/foods',
        routes: [
            {
                key: 'food-type',
                path: '/:type',
                component: 'Foods/List',
            },
            {
                key: 'foods-redirect',
                path: '',
                redirect: '/foods/all',
            },
            {
                key: 'foods-fail',
                component: 'Foods/FailedType',
            }
        ]
    },
    {
        key: 'food-detail',
        path: '/food/:foodId',
        component: 'Detail/Detail',
    },
    {
        key: 'exception',
        path: '/exception',
        routes: [
            {
                key: '404',
                path: '/404',
                component: 'Exception/404',
            },
            {
                key: '500',
                path: '/500',
                component: 'Exception/500',
            },
            {
                key: 'exception-fail',
                redirect: '/exception/404'              //redirect must be absolute path,
            }
        ]
    },
    {
        key: 'fail',
        redirect: '/exception/404',
    }
];
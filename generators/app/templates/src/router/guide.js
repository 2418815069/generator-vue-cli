export default [
    {
        name: 'newHome',
        path: '/newHome',
        meta: {
            name: '新主页'
        },
        component: () => import('@/pages/guide/newHome/index.vue'),
    },
    {
        name: 'guide',
        path: '/guide',
        meta: {
            name: '外部主页门户'
        },
        component: () => import('@/pages/guide/index.vue'),
        children: [{
                name: 'home',
                path: 'home',
                meta: {
                    name: '主页'
                },
                component: () => import('@/pages/guide/home/index.vue')
            },
            {
                name: 'accounts',
                path: 'accounts',
                meta: {
                    name: '帐号相关: 登录&注册'
                },
                component: () => import('@/pages/guide/accounts/index.vue'),
                children: [{
                        name: 'login',
                        path: 'login',
                        meta: {
                            name: '帐号相关: 登录'
                        },
                        component: () => import('@/pages/guide/accounts/login/index.vue'),
                    },
                    {
                        name: 'register',
                        path: 'register',
                        meta: {
                            name: '帐号相关: 注册'
                        },
                        component: () => import('@/pages/guide/accounts/register/index.vue'),
                    }
                ]
            },
            {
                name: 'about',
                path: 'about',
                meta: {
                    name: '关于我们'
                },
                component: () => import('@/pages/guide/about/index.vue')
            },
            {
                name: 'detail',
                path: 'detail',
                meta: {
                    name: '详情'
                },
                component: () => import('@/pages/guide/detail/index.vue')
            },
            {
                name: 'list',
                path: 'list',
                meta: {
                    name: '更多'
                },
                component: () => import('@/pages/guide/list/index.vue')
            },
            {
                name: 'beian',
                path: 'beian',
                meta: {
                    name: '备案项目'
                },
                component: () => import('@/pages/guide/beian/index.vue')
            },
            {
                name: 'faq',
                path: 'faq',
                meta: {
                    name: '常见问题'
                },
                component: () => import('@/pages/guide/faq/index.vue')
            },
            {
                name: 'successCaseList',
                path: 'successCaseList',
                meta: {
                    name: '成功案例list'
                },
                component: () => import('@/pages/guide/successCaseList/index.vue')
            },
            {
                name: 'successCaseDetail',
                path: 'successCaseDetail',
                meta: {
                    name: '成功案例detail'
                },
                component: () => import('@/pages/guide/successCaseDetail/index.vue')
            },
        ]
    }
];
export let navConf = [
    //登录页
    {
        name: 'Login',
        path: '/login',
        component: () => import('@/views/login/index')
    },
    //注册页
    {
        name: 'Register',
        path: '/register',
        component: () => import('@/views/register/index')
    },
    //主页
    {
        name: 'Main',
        path: '/main',
        component: () => import('@/views/main/index')
    }
]
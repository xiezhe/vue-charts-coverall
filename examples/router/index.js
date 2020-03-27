import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        redirect: 'echarts'
    },
    {
        path: '/echarts',
        name: 'echarts',
        component: () => import(/* webpackChunkName: "echarts" */ '../views/echarts'),
        children: [
            {
                path:'type/:type',
                name: 'echartsType',
                component: () => import(/* webpackChunkName: "echarts" */ '../views/echarts/template'),
            }
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

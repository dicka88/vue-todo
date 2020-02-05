import Vue from 'vue';
import Router from 'vue-router';
import User from '@/components/User';
import Home from '@/components/Home';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/user/:id',
            name: 'User',
            Component: User
        }
    ],
});
import HomeComp from './components/HomeComp.vue'
import SignUp from './components/SignUp.vue'
import LoginComp from './components/LoginComp.vue'
import AddRestaurant from './components/AddRestaurant.vue'
import UpdateRestaurant from './components/UpdateRestaurant.vue'

import {createWebHashHistory, createRouter } from 'vue-router'

const router = createRouter({
    history:createWebHashHistory(),
    routes : [
        {
            name : 'Home',
            component : HomeComp,
            path : '/'
        },
        {
            name: 'SignUp',
            component : SignUp,
            path : '/sign-up'
        },
        {
            name: 'Login',
            component : LoginComp,
            path : '/login'
        },
        {
            name: 'AddRestaurant',
            component : AddRestaurant,
            path : '/add'
        },
        {
            name: 'UpdateRestaurant',
            component : UpdateRestaurant,
            path : '/update/:id'
        }
    ],
});

export default router
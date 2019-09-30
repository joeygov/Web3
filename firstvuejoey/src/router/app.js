export default {
    routes: [{
        path: '/Login',
        name: 'login',
        component: resolve => require(['components/Login.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/registrationForm',
        name: 'registrationForm',
        component: resolve => require(['components/registrationForm.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/Dashboard',
        name: 'Dashboard',
        component: resolve => require(['components/Dashboard.vue'], resolve),
        meta: {
            tokenRequired: true
        }
    },
    {
        path: '/Subjects',
        name: 'Subjects',
        component: resolve => require(['components/Subjects.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/PersonalInfo',
        name: 'PersonalInfo',
        component: resolve => require(['components/PersonalInfo.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/Update',
        name: 'Update',
        component: resolve => require(['components/Update.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    }]
}
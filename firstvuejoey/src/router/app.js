export default{
    routes:[{
        path: '/login',
        name: 'login',
        component: resolve => require(['components/Frame/Header.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    }, 
    {
        path: '/form',
        name: 'form',
        component: resolve => require(['components/form.vue'], resolve),
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
    }]
}
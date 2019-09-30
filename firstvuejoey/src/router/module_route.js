import AUTH from 'services/auth'
let beforeEnter = (to, from, next) => {
    //AUTH.currentPath = to.path
    next()
}
var devRoutes = []
let app = require('./app.js')

devRoutes = devRoutes.concat(app.default.routes)
for(var i = 0; i < devRoutes.length; i++){
    devRoutes[i] ['beforeEnter'] = beforeEnter
}
let routes = [
{
    path: '/',
    name: 'home',
    components: resolve => require(['components/Login.vue'], resolve)
}
]
export default {
    routes: devRoutes
}


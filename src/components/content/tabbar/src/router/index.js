import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'


const FirstView = () =>
    import ('../view/firstview/firstview')
const Type = () =>
    import ('../view/type/type')
const BuyCar = () =>
    import ('../view/buycar/buycar')
const My = () =>
    import ('../view/my/my')


Vue.use(Router)

export default new Router({
    routes: [{
        path: ' ',
        redirect: '/firstview'
    }, {
        path: '/firstview',
        component: FirstView
    }, {
        path: '/type',
        component: Type
    }, {
        path: '/buycar',
        component: BuyCar
    }, {
        path: '/my',
        component: My
    }, ]
})

// const routers = [

//     {
//         path: ' ',
//         redirect: '/firstview'
//     }, {
//         path: '/firstview',
//         components: FirstView
//     }, {
//         path: '/type',
//         components: Type
//     }, {
//         path: '/buycar',
//         components: BuyCar
//     }, {
//         path: '/my',
//         components: My
//     },
// ]
// const router = new VueRouter({
//     routers,
//     mode: 'history'
// })

// export default router
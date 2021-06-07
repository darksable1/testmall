import Vue from 'vue'
import Router from 'vue-router'


const FirstView = () =>
    import ('../view/category/firstview/firstview')
const Type = () =>
    import ('../view/category/type/type')
const BuyCar = () =>
    import ('../view/category/buycar/buycar')
const My = () =>
    import ('../view/category/my/my')

Vue.use(Router)

export default new Router({
    mode: 'history',
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
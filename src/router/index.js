import Vue from 'vue'
import VueRouter from 'vue-router'
// 1.安装插件
Vue.use(VueRouter)

//导入组件
// const Home = () => import('../views/home/Home')
const Home = () => import('@/views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Porfile = () => import('../views/profile/Porfile')


// 2.创建路由对象

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Porfile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'  //默认为哈稀显示，增加这个属性后，不再显示#
})


// 3.导出router, 在main.js中再导入router
export default router

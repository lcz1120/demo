// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Goods from 'components/goods/goods.vue'
import Ratings from 'components/ratings/ratings.vue'
import Seller from 'components/seller/seller.vue'
import 'common/stylus/index.styl'

Vue.use(VueRouter)
Vue.use(VueResource)
// 1. 定义（路由）组件。
const goods = { template: '<div>goods</div>' }
const ratings = { template: '<div>ratings</div>' }
const seller = { template: '<div>seller</div>' }

// 2. 定义路由
const routes = [
  { path: '/goods', component: Goods },
  { path: '/ratings', component: Ratings },
  { path: '/seller', component: Seller }
]

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

// 4. 创建和挂载根实例。
const app = new Vue({
  router
}).$mount('#app')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

router.push('goods');
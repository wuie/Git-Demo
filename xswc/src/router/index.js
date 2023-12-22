import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Article from '../views/Article.vue'
import Notice from '../views/Notice.vue'
import science from '../views/wenzhang/science.vue'
import moment from '../views/wenzhang/moment.vue'
import xiangqing from '../views/wenzhang/xiangqing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/article',
    name: 'article',
    component: Article,
    children: [
      {
        path: '/article/science',
        name: 'science',
        component: science,
        children: [
          {
            path:'/article/science/xiangqing',
            name:'xiangqing',
            component:xiangqing
          }
        ]
      },
      {
        path: '/article/moment',
        name: 'moment',
        component: moment,
      }
    ]
  },
  {
    path: '/notice',
    name: 'notice',
    component: Notice,

  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

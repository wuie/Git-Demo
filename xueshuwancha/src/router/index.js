import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
Vue.use(VueRouter)

const routes =[]
const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
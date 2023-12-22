import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import ElementPlus from 'element-plus'
//import 'element-plus/dist/index.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
//Vue.use(ElementPlus)

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).mount('#app')

new VueElement({
    render:h=>h(App),
    router
}).$mount('#app')

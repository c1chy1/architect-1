import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueLazyLoad from 'vue3-lazyload'
import './assets/tailwind.css'
import VueSmoothScroll from 'vue3-smooth-scroll'


createApp(App)
    .use(router)
    .use(VueLazyLoad)
    .use(VueSmoothScroll)
    .mount('#app')


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import microApp from '@micro-zoe/micro-app'
microApp.start()
createApp(App).use(store).use(router).use(ElementPlus).mount('#app')

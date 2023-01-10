import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import i18n from './i18n'

createApp(App).use(i18n).use(router).mount('#app')

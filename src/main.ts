import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { layouts } from './plugins/layouts'

import "./assets/styles/main.scss"

const pinia = createPinia()
const app = createApp(App)

app.use(router).use(layouts).use(pinia)

app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { layouts } from './plugins/layouts'

import "./assets/styles/main.scss"

const app = createApp(App)

app.use(router).use(layouts)

app.mount('#app')

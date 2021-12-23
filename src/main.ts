import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index'
import '@/assets/boe-iconfont/iconfont.css'
import '@/assets/css/reset.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

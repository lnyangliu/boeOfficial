import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/boe-iconfont/iconfont.css'
import '@/assets/css/reset.less'
import router from './routes/index'

const app = createApp(App)
app.use(router)
app.mount('#app')

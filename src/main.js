import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import 'element-plus/theme-chalk/display.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './assets/fontawesome/css/all.css'
import './styles/style.scss'
import App from './App.vue'

createApp(App)
.use(ElementPlus)
.mount('#app')

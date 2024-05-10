import { createApp } from 'vue'
// 引入动画库
import 'animate.css'

// 完整引入饿了么Plus（默认英文版）
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入自定义主题变量
import "@/assets/theme/element-variables.scss"

// 汉化饿了么组件库（深度依赖需要在vite.config.js中的optimizeDeps的include中预先编译）
import 'dayjs/locale/zh-cn'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// 引入状态管理仓库
import { createPinia } from 'pinia'
// 全局状态持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router/index.js'
import http from './http.js'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App);
app.config.globalProperties.$http = http;
app.use(router).use(pinia).use(ElementPlus, { locale: zhCn }).mount('#app');



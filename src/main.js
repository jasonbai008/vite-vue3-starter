import { createApp } from 'vue';

// 引入我自己的 lazy-man-css
import 'lazy-man-css'

// 完整引入饿了么Plus（默认英文版）
import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';

// 引入自定义主题变量
import '@/assets/theme/element-variables.scss';

// 汉化饿了么组件库（深度依赖需要在vite.config.js中的optimizeDeps的include中预先编译）
import 'dayjs/locale/zh-cn';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

// 引入状态管理仓库
import { createPinia } from 'pinia';
// 全局状态持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
// 引入全局状态对象
import { useStore } from '@/stores/index';

// 引入day.js
import dayjs from 'dayjs';

// 引入事件总线
import mitt from 'mitt';

import App from './App.vue';
import router from './router/index.js';
import request from './utils/request.js';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(router).use(pinia).use(ElementPlus, { locale: zhCn })

// 以下变量绑定到全局，在【选项式的Vue组件】中，可以直接使用，比如：this.$store
// 就不用挨个引入了
app.config.globalProperties.$dayjs = dayjs;
app.config.globalProperties.$request = request;
app.config.globalProperties.$bus = mitt();
app.config.globalProperties.$store = useStore();

app.mount('#app');

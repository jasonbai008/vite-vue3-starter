# vite-vue3-starter

a Vue3-Starter powered by Vite.

## Stack

- vue 3.x
- vue-router 4.x
- pinia 2.x
- pinia-plugin-persistedstate
- element-plus 2.3.12
- axios
- mitt
- echarts 5.x
- animate.css
- unplugin-auto-import
- prettier

## Features

1. 支持 SCSS
2. 支持自动打开浏览器
3. 支持配置环境变量
4. 支持开发环境请求代理
5. 支持 element-plus 自定义主题色
6. 支持自动引入 vue 模块 【借助插件：unplugin-auto-import/vite】
7. 封装了自适应 echarts 图表组件
8. 支持全局状态持久化【默认未开启】
9. 支持批量格式化
10. 支持全局格式化配置

## How to Use

```sh
# install dependencies
npm install

# serve with hot reload at localhost:5173
npm run dev

# build for production with minification
npm run build

# Preview builded page
npm run preview

# Format all files under src
npm run format
```

## Prettier Introduction

```js
{
    "printWidth": 120, // 每行最大字符数
    "tabWidth": 2, // 缩进宽度
    "useTabs": false, // 不使用制表符
    "semi": true, // 使用分号
    "singleQuote": true, // 使用单引号
    "arrowParens": "always", // 箭头函数参数总是使用括号
    "bracketSpacing": true, // 对象字面量括号内加空格
    "endOfLine": "lf", // 行尾使用换行符
    "trailingComma": "all" // 最后一个元素后添加逗号
}
```

## Documentations

- [Vite Documentation](https://vitejs.dev/guide/)
- [Vue3 Documentation](https://v3.vuejs.org/)
- [Vue-Router4 Documentation](https://next.router.vuejs.org/guide/)
- [Pinia Documentation](https://pinia.vuejs.org/zh/introduction.html)
- [pinia-plugin-persistedstate Documentation](https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/)
- [Element-Plus Documentation](https://element-plus.org/#/zh-CN/component/installation)
- [通过Plop自动生成vue页面](https://juejin.cn/post/6997401682615205919)

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
- dayjs
- lazy-man-css
- unplugin-auto-import
- prettier
- fabric

## Features

1. 支持 SCSS
2. 支持自动打开浏览器
3. 支持配置环境变量
4. 支持开发环境请求代理
5. 支持 element-plus 自定义主题色
6. 支持自动引入 vue 模块 【借助插件：unplugin-auto-import】
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

## Prettierrc Introduction

```js
{
  "printWidth": 120,               // 一行的最大长度
  "tabWidth": 2,                   // 每个缩进级别的空格数
  "useTabs": false,                // 是否使用制表符而不是空格
  "semi": true,                    // 行末是否加分号
  "singleQuote": true,             // 使用单引号而不是双引号
  "trailingComma": "es5",          // 在ES5有效的地方（对象和数组）添加尾逗号: "none" | "es5" | "all"
  "bracketSpacing": true,          // 在对象字面量的大括号之间打印空格
  "jsxBracketSameLine": false,     // 在 JSX 中将 `>` 放在最后一行的末尾而不是单独放在下一行
  "arrowParens": "always",         // 箭头函数参数是否使用括号: "avoid" | "always"
  "endOfLine": "lf"                // 行结束符: "auto" | "lf" | "crlf" | "cr"
}
```

## Documentations

- [Vite Documentation](https://vitejs.dev/guide/)
- [Vue3 Documentation](https://v3.vuejs.org/)
- [Vue-Router4 Documentation](https://next.router.vuejs.org/guide/)
- [Pinia Documentation](https://pinia.vuejs.org/zh/introduction.html)
- [pinia-plugin-persistedstate Documentation](https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/)
- [Element-Plus Documentation](https://element-plus.org/#/zh-CN/component/installation)
- [Day.js中文网](https://dayjs.fenxianglu.cn/)

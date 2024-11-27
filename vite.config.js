import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 使用unplugin-auto-import插件可以使开发者在编写代码的过程中，无需手动引入模块
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",  // 可以部署到任意子路径
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue"],
    }),
  ],
  // 路径别名
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    open: true, // 启动自动打开浏览器
    // 开发环境请求代理
    proxy: {
      "/api": {
        target: "http://backendUrl.com",
        changeOrigin: true,
        // secure: true, // 是否https接口
        // ws: true, // 是否代理websockets
      },
    },
  },
  build: {
    outDir: "docs",
    rollupOptions: {
      output: {
        // 指定 JS 输出到 `dist/js` 目录
        entryFileNames: 'js/[name].[hash].js',
        chunkFileNames: 'js/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          // 指定 CSS 输出到 `dist/css` 目录
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'css/[name].[hash][extname]'
          }
          // 指定 字体 输出到 `dist/fonts` 目录
          if (assetInfo.name && assetInfo.name.endsWith('.ttf')) {
            return 'fonts/[name].[hash][extname]'
          }
          // 其他资源文件输出到 `dist/assets` 目录
          return 'assets/[name].[hash][extname]'
        }
      }
    }
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@use "@/assets/theme/element-variables.scss" as *;`,
  //     },
  //   },
  // },
  // vite 在执行 runOptimize 的时候中会使用 rollup 对 axios 包重新编译，
  // 将编译成符合 esm 模块规范的新的包放入 node_modules 下的 .vite_opt_cache 中，
  // 然后配合 resolver 对 axios 的导入进行处理：
  // 使用编译后的包内容代替原来 axios 的包的内容，
  // 这样就解决了 vite 中不能使用 cjs 包的问题，
  // 这部分代码在  depOptimizer.ts 里。
  // 优化依赖
  // optimizeDeps: {
  //   include: [
  //     "axios",
  //     "echarts",
  //     "element-plus/dist/locale/zh-cn.mjs",
  //     "dayjs/locale/zh-cn",
  //   ],
  // },
});

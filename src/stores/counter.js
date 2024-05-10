import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    // 借助pinia-plugin-persistedstate插件，实现数据持久化
    // 该插件的默认配置如下:
    // 使用 localStorage 进行存储
    // store.$id 作为 storage 默认的 key
    // 使用 JSON.stringify/JSON.parse 进行序列化/反序列化
    // 整个 state 默认将被持久化

    // 如需持久化，设置为true即可
    persist: false,
    // 选项式
    state: () => {
        return {
            count: 0
        }
    },
    getters: {
        double(state) {
            return state.count * 2
        }
    },
    actions: {
        increment() {
            // action 可通过 this 访问整个 store 实例
            this.count++
        },
    },
})
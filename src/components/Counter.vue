<template>
  <h1>{{ msg }}</h1>

  <!-- 使用了全局状态中心的action -->
  <el-button @click="store.increment">count is: {{ store.count }}</el-button>
  <p>
    <span>The ENV: {{ state.mode }}</span>
    <br />
    <span>The Double Count: {{ dcount }}</span>
  </p>
</template>

<script setup>
// 引入全局状态
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()

// 定义组件属性
const props = defineProps(['msg'])

// 创建响应式变量
const state = ref({
  count: 0,
  mode: import.meta.env.MODE, // 获取环境变量
})

// 打印环境变量，无需使用this
console.log(state.value.mode)

// 计算属性
let dcount = computed(() => store.double)

// 生命周期
onMounted(() => console.log('the component is mounted.'))
onUpdated(() => console.log('The component is updated.'))
onUnmounted(() => console.log('The component is unmounted.'))

// 监听变量，注意需要加.value，恶心
watch(state.value, (n) => {
  console.log(`The new value is ${n.count}`)
})

// 监听全局的store中的数据
store.$subscribe((mutation, state) => {
  console.log(state.count)
})
</script>

<style scoped lang="scss">
// 支持scss语法，需要提前安装sass模块
h1 {
  font-weight: bold;
}
</style>

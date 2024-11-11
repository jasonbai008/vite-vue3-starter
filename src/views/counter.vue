<template>
  <div class="countWrap flex flexCenter">
    <Counter></Counter>
  </div>
</template>
<script>
import Counter from '@/components/Counter.vue';
export default {
  name: 'counterPage',
  components: {
    Counter,
  },
};
</script>
<style lang="scss" scoped>
.countWrap {
  height: 100vh;
  flex-direction: column;
}
</style>

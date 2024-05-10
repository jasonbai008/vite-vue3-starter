<template>
  <div class="signin-wrap">
    <div class="inner">
      <h1 class="animate__animated animate__rotateIn animate__faster">⚡</h1>
      <h2 class="animate__animated animate__zoomInDown animate__fast">Vite-Vue3-Starter</h2>
      <router-link to="/counter">
        <el-button type="primary">Counter</el-button>
      </router-link>
      <router-link to="/charts">
        <el-button type="primary">Echarts</el-button>
      </router-link>
      <router-link to="/fabric">
        <el-button type="primary">Fabric</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "signin",
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.signin-wrap {
  height: 100vh;
  display: flex;

  .inner {
    margin: auto;
    margin-top: 25vh;

    h1 {
      font-size: 50px;
    }

    h2 {
      font-size: 40px;
      margin-bottom: 35px;
    }

    a {
      display: inline-block;
      margin: 0 10px;
    }
  }
}
</style>
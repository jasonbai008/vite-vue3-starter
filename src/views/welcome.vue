<template>
  <div class="signin-wrap">
    <div class="inner">
      <h1>⚡</h1>
      <h2>Vite-Vue3-Starter</h2>
      <router-link to="/counter">
        <el-button type="primary">Counter</el-button>
      </router-link>
      <router-link to="/charts">
        <el-button type="primary">Echarts</el-button>
      </router-link>
      <router-link to="/fabric">
        <el-button type="primary">Fabric</el-button>
      </router-link>
      <div class="teches mt20">
        <ul>
          <li>vue 3.x</li>
          <li>vue-router 4.x</li>
          <li>pinia 2.x</li>
          <li>pinia-plugin-persistedstate</li>
          <li>element-plus 2.3.12</li>
          <li>echarts 5.x</li>
          <li>axios</li>
          <li>mitt</li>
          <li>dayjs</li>
          <li>lazy-man-css</li>
          <li>unplugin-auto-import</li>
          <li>prettier</li>
          <li>fabric</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'welcome',
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
    margin-top: 3vh;

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
    ul {
      li {
        text-align: left;
        line-height: 25px;
      }
    }
  }
}
</style>

<template>
  <router-view></router-view>
</template>

<script setup></script>

<style>
/* 思源黑体 */
@font-face {
  font-family: 'Source Han Sans'; /* 自定义字体名称 */
  src: url('assets/fonts/SourceHanSansCN-Normal.ttf'); /* 主字体格式 */
  font-weight: normal; /* 字体粗细 */
  font-style: normal; /* 字体样式 */
}

body {
  font-family: 'Source Han Sans', 'Mircosoft YaHei';
  margin: 0;
  padding: 0;
}

#app {
  text-align: center;
  color: #2c3e50;
}
</style>

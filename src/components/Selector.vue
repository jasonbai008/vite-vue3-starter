<template>
  <div>
    <el-select v-model="selectedArr" multiple collapse-tags style="margin-left: 20px" placeholder="请选择">
      <el-input v-model="searchStr" size="small" placeholder="请搜索"></el-input>
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        <span style="float: left">{{ item.label }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
      </el-option>
    </el-select>
  </div>
</template>
<script>
export default {
  name: 'Selector',
  data() {
    return {
      selectedArr: [],
      searchStr: '',
      options: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
.el-select-dropdown .el-input::v-deep .el-input__inner {
  margin: 10px 15px;
  width: 86%;
}
</style>

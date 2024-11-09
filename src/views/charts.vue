<template>
  <div class="charts-wrap">
    <div class="charts">
      <base-chart v-model="chartData1" theme="light" @click="clickChart"></base-chart>
    </div>
    <div class="charts">
      <base-chart v-model="chartData2" theme="dark" @click="clickChart"></base-chart>
    </div>
  </div>
</template>

<script>
import BaseChart from '@/components/BaseChart.vue';
export default {
  name: 'charts',
  components: {
    BaseChart,
  },
  data() {
    return {
      chartData1: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
          },
        ],
      },
      chartData2: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
          },
        ],
      },
    };
  },
  mounted() {},
  methods: {
    clickChart(item) {
      console.log(item);
    },
  },
};
</script>

<style scoped lang="scss">
.charts-wrap {
  display: flex;
}

.charts {
  width: 50%;
  height: 100vh;
  resize: both;
  overflow: hidden;
}
</style>

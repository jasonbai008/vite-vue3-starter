<template>
  <div :id="chartId"></div>
</template>
<script>
/* 使用示例：

<div class="charts-wrap">
  <base-chart v-model="chartData" theme="dark" @click="clickChart"></base-chart>
</div>

data() {
  return {
    chartData: {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
        },
      ],
    },
  };
},

clickChart(item) {
  console.log(item)
}

.charts-wrap {
  width: 100%;
  height: 400px;  
} 
*/

// 完整引入echarts
import * as echarts from "echarts";
export default {
  name: "BaseChart",
  props: {
    // vue3中v-model的默认变量是：modelValue
    // 如果使用的是vue2，需要将下方的变量以及使用的地方改成value
    modelValue: {
      type: Object,
      default() {
        return {}
      }
    },
    theme: {
      type: String,
      default: 'light',  // light or dark
    },
  },
  data() {
    return {
      myChart: null,
      observer: null,
      parentNode: null,
      // 基础配置
      basicOptions: {
        color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
        grid: {
          left: '5%',
          right: '5%',
          top: 50,
          bottom: 50,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
        },
      },
    };
  },
  computed: {
    chartId() {
      return "chartId" + Math.random().toString(36).substr(2);
    },
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    // 销毁前取消监听
    this.observer.unobserve(this.parentNode);
  },
  watch: {
    modelValue: {
      handler() {
        this.renderChart()
      },
      deep: true
    }
  },
  methods: {
    // 初始化图表实例，并监听容器宽高变化
    init() {
      // 拿到父级节点
      this.parentNode = this.$el.parentNode;
      // 如果使用的是vue3.x
      if (markRaw) {
        // 标记一个对象，使其永远不会再成为响应式对象，否则控制台报错
        this.myChart = markRaw(echarts.init(document.getElementById(this.chartId), this.theme));
      } else {
        this.myChart = echarts.init(document.getElementById(this.chartId), this.theme);
      }

      // 绑定点击事件
      this.myChart.on('click', this.handleClick)

      // 监听父元素尺寸变化
      this.listenFather()

      // 初始化实例后，直接绘制图表一次
      this.renderChart()
    },
    // 绘制图表
    renderChart() {
      const _options = Object.assign({}, this.basicOptions, this.modelValue);
      this.myChart?.setOption(_options);
    },
    // 监听父元素尺寸变化
    listenFather() {
      this.observer = new ResizeObserver(entries => {
        const { width, height } = entries[0].contentRect;
        // 将父级节点的宽高赋值给图表，并重绘
        this.myChart.resize({
          width: width + 'px',
          height: height + 'px',
        });
      });
      this.observer.observe(this.parentNode);
    },
    // 设置点击事件
    handleClick(params) {
      this.$emit("click", params);
    }
  },
};
</script>
<style lang="scss"></style>

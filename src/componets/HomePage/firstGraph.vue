<template>
  <div style="display: flex; justify-content: center; flex-direction: column">
    <!-- <div class="title">JS报错趋势统计</div> -->
    <title-componentVue :na="na"></title-componentVue>
    <div
      id="main"
      style="
        height: calc((100vw / 7 * 2 - 99px) * 0.67);
        width: calc(100vw / 7 * 2 - 99px);
      "
    ></div>
  </div>
</template>

<script>
import titleComponentVue from './titleComponent.vue'
export default {
  name: 'firstGraph',
  components: {
    titleComponentVue,
  },
  data() {
    return {
      time: ['7-24', '7-25', '7-26', '7-27', '7-28', '7-29', '7-30'] || [],
      jsErrorNumberTong: [12, 120, 430, 430, 450, 320, 120] || [],
      jsErrorNumberYi: [12, 225, 327, 330, 320, 220, 120] || [],
      na: 'JS报错趋势统计',
    }
  },
  methods: {
    getPicture() {
    const chartDom = document.getElementById('main')
    const myChart = this.$echarts.init(chartDom, 'dark')
    let option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      backgroundColor: '#000000',
      // title: {
      //     text: 'JS报错趋势统计',
      //     textStyle: {
      //         fontFamily: "Alibaba",
      //         fontSize: 18,
      //         color: "#fff",
      //     }
      // },
      legend: {
        orient: 'vertical',
        data: ['同步错误', '异步错误'],
        right: -5,
        top: 15,
      },
      xAxis: {
        type: 'category',
        data: this.time, // 时间
        boundaryGap: false,
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          name: '同步错误',
          type: 'line',
          data: this.jsErrorNumberTong,
          symbol: 'none',
          lineStyle: {
            // 设置线条的style等
            normal: {
              color: '#466AEB', // 折线线条颜色:红色
            },
          },
          itemStyle: {
            // 设置线条上点的颜色（和图例的颜色）
            normal: {
              color: '#466AEB',
            },
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                // 渐变颜色
                {
                  offset: 0,
                  color: '#466AEB',
                },
                {
                  offset: 1,
                  color: '#ffff',
                },
              ],
              global: false,
            },
          },
        },
        {
          name: '异步错误',
          type: 'line',
          symbol: 'none',
          data: this.jsErrorNumberYi,
          lineStyle: {
            // 设置线条的style等
            normal: {
              color: '#6BE6C1', // 折线线条颜色:红色
            },
          },
          itemStyle: {
            // 设置线条上点的颜色（和图例的颜色）
            normal: {
              color: '#6BE6C1',
            },
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                // 渐变颜色
                {
                  offset: 0,
                  color: '#6BE6C1',
                },
                {
                  offset: 1,
                  color: '#402D6B',
                },
              ],
              global: false,
            },
          },
        },
      ],
    }
    myChart.setOption(option)
    },
    async getInfo() {
      const res = await this.$req.get('/jsErrorBoth')
      const data = res.data
      if(data.status === 0) {
        const async_error = data.result.async_error.map((item) => item.errorCount)
        const sync_error = data.result.sync_error.map((item) => item.errorCount)
        const date = data.result.async_error.map((item) => item.day)
        this.time = date
        this.jsErrorNumberTong = sync_error
        this.jsErrorNumberYi = async_error
        this.getPicture()
      } else {
        console.log('出现错误')
      }
    }
  },
  mounted() {
    this.getInfo()
    
  },
}
</script>

<style></style>

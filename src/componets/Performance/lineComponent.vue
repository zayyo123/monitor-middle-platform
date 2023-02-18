<template>
  <div id="line"></div>
</template>

<script>
import { getpaintTime } from '@/services/performance'

export default {
  name: 'lineComponent',
  data() {
    return {
      paintArr: [],
      firstPaint: [],
      firstContentfulPaint: [],
      firstMeaningfulPaint: [],
      largestContentfulPaint: [],
    }
  },
  mounted() {
    this.getPaintArr()
  },
  methods: {
    async getPaintArr() {
      let res = await getpaintTime()
      for (let i = 0; i < res.data.result.length; i++) {
        this.paintArr.push(res.data.result[i])
      }
      this.paintArr = this.paintArr.sort((a, b) => a.day - b.day)

      this.paintArr.forEach((item) => {
        this.firstPaint.push(item.firstPaint)
      })

      this.paintArr.forEach((item) => {
        this.firstContentfulPaint.push(item.firstContentfulPaint)
      })

      this.paintArr.forEach((item) => {
        this.firstMeaningfulPaint.push(item.firstMeaningfulPaint)
      })

      this.paintArr.forEach((item) => {
        this.largestContentfulPaint.push(item.largestContentfulPaint)
      })

      this.init()
    },
    init() {
      const chartDom = document.getElementById('line')
      const myChart = this.$echarts.init(chartDom, 'dark')

      window.onresize = function () {
        myChart.resize()
      }
      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        backgroundColor: '#000000',
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985',
          },
        },
        xAxis: {
          type: 'category',
          data: ['day1', 'day2', 'day3', 'day4', 'day5', 'day6', 'day7'],
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
            name: 'FP',
            type: 'line',
            data: this.firstPaint,
            symbolSize: 10,
            lineStyle: {
              normal: {
                color: '#6BE6C1 ',
              },
            },
            itemStyle: {
              normal: {
                color: '#6BE6C1 ',
              },
            },
          },
          {
            name: 'FCP',
            type: 'line',
            data: this.firstContentfulPaint,
            symbolSize: 10,
            lineStyle: {
              normal: {
                color: '#8ED6FA ',
              },
            },
            itemStyle: {
              normal: {
                color: '#8ED6FA',
              },
            },
          },
          {
            name: 'FMP',
            type: 'line',
            data: this.firstMeaningfulPaint,
            symbolSize: 10,
            lineStyle: {
              normal: {
                color: '#466AEB',
              },
            },
            itemStyle: {
              normal: {
                color: '#466AEB',
              },
            },
          },
          {
            name: 'LCP',
            type: 'line',
            data: this.largestContentfulPaint,
            symbolSize: 10,

            lineStyle: {
              normal: {
                color: '#EABE37',
              },
            },
            itemStyle: {
              normal: {
                color: '#EABE37',
              },
            },
          },
        ],
      }
      myChart.setOption(option)
    },
  },
}
</script>

<style lang="scss" scoped>
#line {
  width: 50vw;
  height: 27vh;
}
</style>

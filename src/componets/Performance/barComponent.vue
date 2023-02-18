<template>
  <div id="main1"></div>
</template>

<script>
export default {
  name: 'barComponent',
  data() {
    return {
      nameArr: [],
      data: [],
    }
  },
  props: ['mountArr'],
  mounted() {},
  methods: {
    getMountArr() {
      this.mountArr.forEach((item) => {
        this.nameArr.push(item.componentName)
        this.data.push({ value: item.mountTime })
      })
      this.init()
    },
    init() {
      const chartDom = document.getElementById('main1')
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
        xAxis: {
          type: 'category',
          data: this.nameArr,
        },
        backgroundColor: '#000000',
        yAxis: {
          type: 'value',
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            type: 'bar',
            data: this.data,
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)',
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
#main1 {
  height: 27vh;
}
</style>

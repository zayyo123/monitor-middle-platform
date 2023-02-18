<template>
  <div id="main"></div>
</template>

<script>
export default {
  name: 'listComponent',
  data() {
    return {}
  },
  props: ['loadData'],
  mounted() {},
  methods: {
    init() {
      const chartDom = document.getElementById('main')
      const myChart = this.$echarts.init(chartDom, 'dark')

      window.onresize = function () {
        myChart.resize()
      }

      const seriesLabel = {
        show: true,
        position: 'right',
      }
      let option = {
        grid: {
          left: '10%',
          // right: '30%',
          bottom: '0%',
          top: '0%',
          containLabel: true,
        },
        backgroundColor: '#000000',
        // title: {
        //     text: '页面访问速度分布',
        //     textStyle: {
        //         fontFamily: "Alibaba",
        //         fontSize: 18,
        //         color: "#fff",
        //     }
        // },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        // grid: {
        //     left: 100
        // },
        // toolbox: {
        //   show: true,
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        xAxis: {
          type: 'value',
          show: false,
          axisLabel: {
            formatter: '{value}',
          },
          splitLine: {
            show: false,
          },
          color: 'black',
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: '#000',
              width: 1, //这里是为了突出显示加上的
            },
          },
          splitLine: {
            show: false,
          },
          boundaryGap: true,
          type: 'category',
          inverse: true,
          data: ['0', '1', '2', '3'],
          axisLabel: {
            interval: 0,
            formatter: function (value) {
              if (parseInt(value) == 0) {
                return '{' + value + '| } {value|' + '< 1秒   ' + '}'
              } else if (parseInt(value) == 1) {
                return '{' + value + '| } {value|' + '1-3秒   ' + '}'
              } else if (parseInt(value) == 2) {
                return '{' + value + '| } {value|' + '3-5秒  ' + '}'
              } else {
                return '{' + value + '| } {value|' + '5秒以上' + '}'
              }
            },
            margin: 20,
            rich: {
              value: {
                lineHeight: 30,
                align: 'center',
              },
              0: {
                height: 8,
                width: 8,
                align: 'center',
                backgroundColor: '#8ED6FA ',
                borderRadius: 10,
              },
              1: {
                height: 8,
                width: 8,
                align: 'center',
                backgroundColor: '#6BE6C1 ',
                borderRadius: 10,
              },
              2: {
                height: 8,
                width: 8,
                align: 'center',
                backgroundColor: '#466AEB ',
                borderRadius: 10,
              },
              3: {
                height: 8,
                width: 8,
                align: 'center',
                backgroundColor: '#466AEB ',
                borderRadius: 10,
              },
            },
          },
        },
        series: [
          {
            name: 'count',
            type: 'bar',
            label: seriesLabel,
            data: this.loadData,
            barWidth: 13,
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#1A70F3', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#6BE6C1 ', // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
            // barCategoryGap: '100%',
            // boundaryGap: ['10%','10%','10%','20%']
          },
        ],
      }
      myChart.setOption(option)
    },
  },
}
</script>

<style lang="scss" scoped>
#main {
  width: calc((100vw / 7 * 2 - 64px) * 5 / 8);
}
</style>

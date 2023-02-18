<template>
<div class="container">
    <titleComponent :na="na"></titleComponent>
  <div id="globe"></div>
</div>
</template>

<script>
import 'echarts-gl'
import titleComponent from './titleComponent.vue'
export default {
  name: 'SevenGraph',
  components: {
    titleComponent
  },
  data() {
    return {
      myChart: null,
      chartDom: null,
      na: '用户地区分布图'
    }
  },
  mounted() {
    this.chartDom = document.getElementById('globe')
    this.myChart = this.$echarts.init(this.chartDom)
    this.mapInit()
  },
  methods: {
    mapInit() {
      console.log('xxx')
      const url = 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dbf199cb27ad46839fbab926b8f94e66~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?'
      this.myChart.setOption({
        backgroundColor: '#000', //背景颜色
        globe: {
          baseTexture: url, //地球的纹理。支持图片路径的字符串，图片或者 Canvas 的对象
          heightTexture: url, //地球的高度纹理
          shading: 'lambert', //地球中三维图形的着色效果
          light: {
            ambient: {
              intensity: 0.2, //环境光源强度
            }, //环境光
            main: {
              intensity: 0.8, //光源强度
            }, //主光源
          }, //光照设置
        },
        series: {
          type: 'lines3D',
          coordinateSystem: 'globe',
          blendMode: 'source-over',
          effect: {
            show: true,
          },
          lineStyle: {
            width: 1,
            color: 'rgb(255, 255,255)',
            opacity: 0.5,
            trailWidth: 4,
            trailLength: 0.01,
          }, //3D飞线图
          data: [
            [
              [112, 40, 2], // 终点的经纬度和海拔坐标
              [120, 20, 1], // 起点的经纬度和海拔坐标
            ],
            [
              [112, 40, 2],
              [20, -40, 1],
            ],
            [
              [112, 40, 2],
              [-60, 60, 1],
            ],
            [
              [112, 40, 2],
              [40, 0, 1],
            ],
            [
              [112, 40, 2],
              [-20, 20, 1],
            ],
            [
              [112, 40, 2],
              [-39, -40, 1],
            ],
            [
              [112, 40, 2],
              [67, 43, 1],
            ],
            [
              [112, 40, 2],
              [160, -18, 1],
            ],
            [
              [112, 40, 2],
              [145, 66, 1],
            ],
            [
              [112, 40, 2],
              [1790, 42, 1],
            ],
          ],
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
}
#globe {
  margin: 60px 24px;
  width: calc(100% - 48px);
  height: 80%;
}
</style>
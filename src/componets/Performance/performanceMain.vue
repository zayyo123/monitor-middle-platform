<template>
  <div class="main">
    <div class="wrapper">
      <performanceTop :paintArr="paintArr" ref="top"></performanceTop>
      <performanceMiddle></performanceMiddle>
      <performanceBottom></performanceBottom>
    </div>
    <a
      href="https://gitee.com/re-vue-monitor/monitor-middle-platform"
      class="md"
    >
      <img src="../../assets/组 67.png" alt="" class="img" />
      <p>使用文档</p>
    </a>
  </div>
</template>

<script>
import performanceTop from './performanceTop.vue'
import performanceMiddle from './performanceMiddle.vue'
import performanceBottom from './performanceBottom.vue'
import { getpaintTime } from '@/services/performance'

export default {
  name: 'performanceMain',
  components: {
    performanceTop,
    performanceMiddle,
    performanceBottom,
  },
  data() {
    return {
      paintArr: [],
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
      this.$refs.top.getPaintArr()
    },
  },
}
</script>

<style lang="scss" scoped>
.main {
  flex: 0.842;
  height: 100vh;
  background: #000000;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  box-sizing: border-box;
}
.wrapper {
  width: 100%;
  margin: 6.7vh 7.7vw 6.7vh 7.7vw;
}
.md {
  position: fixed;
  top: 3.1vh;
  right: 3.3854vw;
  width: 8.3333vw;
  height: 5vh;
  background: linear-gradient(10deg, #081f37 0%, #123251 100%);
  border-radius: 27px 27px 27px 27px;
  opacity: 0.7;
  border: 1px solid #275079;
  display: flex;
  justify-content: space-around;
  vertical-align: center;
  .img {
    margin-top: 1.28vh;
    margin-left: 1.3021vw;
    width: 1.0938vw;
    height: 2.3vh;
  }
  p {
    width: 5vw;
    height: 2.5vh;
    font-size: 0.9vw;
    font-family: Alibaba PuHuiTi-Regular, Alibaba PuHuiTi;
    font-weight: 400;
    color: #ffffff;
    line-height: 1vh;
    margin-right: 0.625vw;
  }
}
</style>

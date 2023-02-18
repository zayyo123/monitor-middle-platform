<template>
  <div class="footer">
    <div class="left">
      <div style="display: flex; margin-bottom: 0.9896vw">
        <titleComponent na="近7天页面访问速度分布(ms)"></titleComponent>
      </div>
      <div class="page">
        <div class="topleft"></div>
        <div class="topright"></div>
        <div class="leftbottom"></div>
        <div class="rightbottom"></div>
        <ListComponent :loadData="loadData" ref="list"></ListComponent>
        <div>
          <fourGraph :loadData="loadData" ref="four"></fourGraph>
        </div>
      </div>
    </div>
    <div class="right">
      <div style="display: flex; margin-bottom: 0.9896vw">
        <titleComponent na="近7天监控组件访问时间(ms)"></titleComponent>
      </div>
      <div class="component">
        <div class="topleft"></div>
        <div class="topright"></div>
        <div class="leftbottom"></div>
        <div class="rightbottom"></div>
        <BarComponent :mountArr="mountArr" ref="mount"></BarComponent>
      </div>
    </div>
  </div>
</template>

<script>
import titleComponent from '../HomePage/titleComponent.vue'
import fourGraph from '../HomePage/fourGraph.vue'
import ListComponent from './listComponent.vue'
import BarComponent from './barComponent.vue'
import { getLoadArr, getMountArr } from '@/services/performance'

export default {
  name: 'performanceBottom',
  components: {
    titleComponent,
    fourGraph,
    ListComponent,
    BarComponent,
  },
  data() {
    return {
      loadArr: [],
      mountArr: [],
      best: 0,
      good: 0,
      bad: 0,
      badest: 0,
      loadData: [],
    }
  },
  mounted() {
    this.getLoadArr()
    this.getMountArr()
  },
  methods: {
    async getLoadArr() {
      const res = await getLoadArr()
      this.loadArr = res.data.result
      this.loadArr.forEach((item) => {
        if (item.loadTime < 1000) {
          this.best++
        } else if (item.loadTime < 3000) {
          console.log(item.loadTime)
          this.good++
        } else if (item.loadTime < 5000) {
          this.bad++
        } else {
          this.badest++
        }
      })
      this.loadData.push(this.best)
      this.loadData.push(this.good)
      this.loadData.push(this.bad)
      this.loadData.push(this.badest)
      this.$refs.list.init()
      this.$refs.four.getData()
    },
    async getMountArr() {
      const res = await getMountArr()
      for (let i = 0; i < res.data.result.length; i++) {
        this.mountArr.push(res.data.result[i])
      }

      this.$refs.mount.getMountArr()
      console.log(this.$refs.mount.mountArr)
    },
  },
}
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 1.0417vw;
  display: flex;
  justify-content: space-between;
}
.left,
.right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.page {
  position: relative;
  width: 36.4583vw;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba($color: #a0a7e6, $alpha: 0.6);
}
.component {
  position: relative;
  width: 26vw;
  height: 28vh;
  border: 1px solid rgba($color: #a0a7e6, $alpha: 0.6);
}

.topleft {
  position: absolute;
  top: -2px;
  left: -2px;
  width: 0.5208vw;
  height: 0.5208vw;
  border-left: 2px solid #a485e6;
  border-top: 2px solid #a485e6;
}
.topright {
  position: absolute;
  top: -2px;
  right: -2px;
  width: 0.5208vw;
  height: 0.5208vw;
  border-right: 2px solid #a485e6;
  border-top: 2px solid #a485e6;
}
.leftbottom {
  position: absolute;
  bottom: -2px;
  left: -2px;
  width: 0.5208vw;
  height: 0.5208vw;
  border-left: 2px solid #a485e6;
  border-bottom: 2px solid #a485e6;
}
.rightbottom {
  position: absolute;
  bottom: -1px;
  right: -2px;
  width: 0.5208vw;
  height: 0.5208vw;
  border-right: 2px solid #a485e6;
  border-bottom: 2px solid #a485e6;
}
</style>

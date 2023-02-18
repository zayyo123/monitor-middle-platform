<template>
  <div class="top">
    <div class="left">
      <div style="display: flex; margin-bottom: 0.9895vw">
        <titleComponent na="近7天概况"></titleComponent>
      </div>
      <div class="meanTime">
        <div class="item">
          <div class="item-item1">FP平均时间</div>
          <div class="item-item2">{{ parseInt(firstPaint / 7) }}ms</div>
        </div>
        <div class="item">
          <div class="item-item1">FCP平均时间</div>
          <div class="item-item2">
            {{ parseInt(firstContentfulPaint / 7) }}ms
          </div>
        </div>
        <div class="item">
          <div class="item-item1">FMP平均时间</div>
          <div class="item-item2">
            {{ parseInt(firstMeaningfulPaint / 7) }}ms
          </div>
        </div>
        <div class="item">
          <div class="item-item1">LCP平均时间</div>
          <div class="item-item2">
            {{ parseInt(largestContentfulPaint / 7) }}ms
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div style="display: flex; margin-bottom: 0.9895vw">
        <titleComponent na="近7天白屏页面个数"></titleComponent>
      </div>
      <div class="blank">
        <div class="count" :class="{ green: green, yellow: yellow, red: red }">
          {{ count }}
        </div>
        <div class="status">
          <div class="healthy">健康状况:</div>
          <div class="what">{{ getWhat(count) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getBlankCount } from '@/services/performance'
import titleComponent from '../HomePage/titleComponent.vue'
export default {
  name: 'performanceTop',
  components: {
    titleComponent,
  },
  props: ['paintArr'],
  data() {
    return {
      firstPaint: 0,
      firstContentfulPaint: 0,
      firstMeaningfulPaint: 0,
      largestContentfulPaint: 0,
      count: 0,
      green: false,
      red: false,
      yellow: false,
    }
  },
  mounted() {
    this.getCount()
  },
  methods: {
    getWhat(count) {
      if (count < 5) {
        this.green = true
        return '优秀'
      } else if (count < 10) {
        this.yellow = true
        return '良好'
      } else {
        this.red = true
        return '差劲'
      }
    },
    getPaintArr() {
      this.paintArr.forEach((item) => {
        this.firstPaint += item.firstPaint
        this.firstContentfulPaint += item.firstContentfulPaint
        this.firstMeaningfulPaint += item.firstMeaningfulPaint
        this.largestContentfulPaint += item.largestContentfulPaint
      })
    },
    async getCount() {
      const res = await getBlankCount()
      this.count = res.data.count
    },
  },
}
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  justify-content: space-between;
}

.left,
.right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.meanTime {
  width: 44.6354vw;
  height: 10.5vh;
  background: linear-gradient(10deg, #081f37 0%, #123251 100%);
  border-radius: 0px 0px 0px 0px;
  opacity: 0.7;
  border: 0.0521vw solid #275079;
  display: flex;
}
.blank {
  width: 19.0104vw;
  height: 11vh;
  background: linear-gradient(10deg, #081f37 0%, #123251 100%);
  border-radius: 0px 0px 0px 0px;
  opacity: 0.7;
  border: 1px solid #275079;
  padding-left: 1.5625vw;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  .count {
    margin-top: 6px;
    width: 3.39vw;
    height: 3.39vw;
    border-radius: 50%;
    opacity: 1;
    font-size: 2.1354vw;
    line-height: 3.39vw;
    color: #fff;
  }
  .green {
    border: 8px solid #6be6c1;
  }
  .yellow {
    border: 8px solid yellow;
  }
  .red {
    border: 8px solid red;
  }
  .status {
    display: flex;
    flex-direction: column;
    margin-top: 1.302vw;
    margin-right: 3.6458vw;
    .healthy {
      width: 4.1146vw;
      height: 2.037vh;
      font-size: 0.833vw;
      font-weight: 400;
      color: #fff;
      line-height: 0px;
    }
    .what {
      margin-top: 1.0417vw;
      width: 2.4479vw;
      height: 3.0555vw;
      font-size: 1vw;
      font-weight: 500;
      color: #fff;
      line-height: 0px;
    }
  }
}
.item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .item-item1 {
    text-align: center;
    font-size: 1.1vw;
    font-weight: 400;
    color: #82a1bf;
    line-height: 0px;
  }
  .item-item2 {
    margin-bottom: 10px;
    text-align: center;
    font-family: Alibaba PuHuiTi-Medium, Alibaba PuHuiTi;
    font-size: 1.8vw;
    font-weight: 500;
    color: #fff;
    line-height: 0px;
  }
}
</style>

<template>
  <div class="middle">
    <div style="display: flex; margin-bottom: 0.9895vw">
      <titleComponent na="近7天页面渲染时间(ms)"></titleComponent>
    </div>
    <div class="wrapper">
      <LineComponent></LineComponent>
      <div class="topleft"></div>
      <div class="topright"></div>
      <div class="leftbottom"></div>
      <div class="rightbottom"></div>
      <PaintList></PaintList>
    </div>
  </div>
</template>

<script>
import titleComponent from '../HomePage/titleComponent.vue'
import LineComponent from './lineComponent.vue'
import PaintList from './paintList.vue'
export default {
  name: 'performanceMiddle',
  components: {
    titleComponent,
    LineComponent,
    PaintList,
  },
}
</script>

<style lang="scss" scoped>
.middle {
  margin-top: 1.0417vw;
  position: relative;
  .wrapper {
    position: relative;
    border: 1px solid rgba($color: #a0a7e6, $alpha: 0.6);
    display: flex;
    justify-content: space-between;
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
}
</style>

<template>
  <div class="main">
    <div class="paint">
      <div class="common" style="background-color: #6be6c1"></div>
      <div style="color: #6be6c1; font-size: 1.1vw">首屏绘制时间（FP）</div>
    </div>
    <div class="paint">
      <div class="common" style="background-color: #8ed6fa"></div>
      <div style="color: #8ed6fa; font-size: 1.1vw">
        首次内容绘制时间（FCP）
      </div>
    </div>
    <div class="paint">
      <div class="common" style="background-color: #466aeb"></div>
      <div style="color: #466aeb; text-align: left; font-size: 1.1vw">
        第一个有意义的内容出现时间（FMP）
      </div>
    </div>
    <div class="paint">
      <div class="common" style="background-color: #eabe37"></div>
      <div style="color: #eabe37; font-size: 1.1vw">
        最大内容块渲染时间（LCP）
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'paintList',
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.paint {
  display: flex;
  margin-right: 1.3021vw;
  .common {
    width: 0.5729vw;
    height: 0.5729vw;
    border-radius: 50%;
    margin-right: 0.5208vw;
    margin-top: 0.8vh;
  }
}
</style>

<template>
  <div class="mini-container">
    <div class="title-container">
      <title-component :na="na" class="title"></title-component>
    </div>
    <div class="mini-content" id="content">
      <div class="grid-container">
        <div
          class="flag-container"
          v-for="(stats, index) in errorStats"
          :key="index"
        >
          <div class="bar" :class="'bar-' + stats.statusCode"></div>
          <div class="flag" :class="'flag-' + stats.statusCode">
            <div class="flag-1">{{ stats.statusCode }}</div>
            <div class="flag-2">发生次数</div>
            <div class="flag-3">{{ stats.count }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import titleComponent from "@/componets/HomePage/titleComponent.vue";

export default {
  name: "mini-count",
  components: {
    titleComponent,
  },
  data() {
    return {
      na: "接口错误概况",
      errorStats: [],
    };
  },
  created() {
    this.$req
      .get(
        "https://koa-monitorrver-koa-dxsjkmwnnu.cn-hangzhou.fcapp.run/api/mp/classifiedcount"
      )
      .then((response) => {
        // console.log("分类成功", response.data.countArray);
        this.errorStats = response.data.countArray;
      });
  },
};
</script>

<style scoped>
.mini-container {
  display: flex;
  flex-direction: column;
  margin-right: 1.6vw;
}

.title-container {
  margin-bottom: 2.5vw;
  display: flex;
  justify-content: space-between;
}

.mini-content {
  border: 0.3px dashed #a485e6;
  width: 100%;
  height: 32.5vh;
  overflow-y: scroll;
}

.mini-content::-webkit-scrollbar {
  width: 20px;
  height: 8px;
}

.mini-content::-webkit-scrollbar-thumb {
  border-radius: 12px;
  border: 7px solid rgba(0, 0, 0, 0);
  box-shadow: 9px 0 0 #a5adb7 inset;
  height: 120px;
}

.grid-container {
  margin: 1vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 7vw;
  gap: 2vw;
}

.flag-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.bar {
  width: 5.6vw;
  height: 0.5vh;
}

.flag {
  width: 5.6vw;
  height: 7vw;
  background: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 6px 6px 6px 6px;
  opacity: 0.55;
}

.flag-1 {
  font-size: 1.5vw;
  color: white;
  font-family: AlibabaRegular;
  font-weight: bold;
}

.flag-2 {
  color: white;
  font-size: 6px;
  font-family: AlibabaRegular;
}

.flag-3 {
  padding: 0.5vw;
  color: white;
  font-size: 16px;
  font-family: AlibabaRegular;
}

.flag-400 {
  background: #6c9ac4;
}

.bar-400 {
  background: #466aeb;
}

.flag-404 {
  background: #c4aa6c;
}

.bar-404 {
  background: #eabe37;
}

.flag-500 {
  background: #6cb8c4;
}

.bar-500 {
  background: #6be6c1;
}

.flag-304 {
  background: #726cc4;
}

.bar-304 {
  background: #7a7af9;
}

.flag-502 {
  background: pink;
}

.bar-502 {
  background: palevioletred;
}

.flag-401 {
  background: #3cb371;
}

.bar-401 {
  background: #2e8b57;
}

.flag-402 {
  background: Orange;
}

.bar-402 {
  background: DarkOrange;
}

.flag-403 {
  background: Salmon;
}

.bar-403 {
  background: FireBrick;
}
</style>

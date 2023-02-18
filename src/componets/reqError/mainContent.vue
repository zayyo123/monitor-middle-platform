<template>
  <div class="container">
    <div class="top-bar">
      <a href="https://gitee.com/re-vue-monitor" class="md">
        <img src="../../assets/组 67.png" alt="" class="img" />
        <p>使用文档</p>
      </a>
    </div>
    <req-overview class="overview" />
    <req-detailed class="detail" />
    <req-record class="record" />
    <mini-count class="top" />
  </div>
</template>

<script>
import ReqOverview from "./reqOverview.vue";
import MiniCount from "./miniCount.vue";
import ReqDetailed from "./reqDetailed.vue";
import ReqRecord from "./reqRecord.vue";

export default {
  components: { ReqOverview, ReqDetailed, ReqRecord, MiniCount },
  name: "mainContent",
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  flex: 0.842;
  height: 100vh;
  display: grid;
  grid-template-columns: 3fr 1fr 2fr;
  grid-template-rows: 1fr 3fr 3fr;
  grid-gap: 1vw;
  background-color: black;
  border-radius: 0px 0px 0px 0px;
  box-sizing: border-box;
}

.top-bar {
  grid-column: 1/4;
  grid-row: 1;
  display: flex;
  justify-content: right;
}

.overview {
  grid-column: 1/3;
  grid-row: 2;
}

.top {
  grid-column: 3/4;
  grid-row: 2;
}

.record {
  grid-column: 1/2;
  grid-row: 3;
}

.detail {
  grid-column: 2/4;
  grid-row: 3;
}

.md {
  width: 8vw;
  height: 5vh;
  background: linear-gradient(10deg, #081f37 0%, #123251 100%);
  border-radius: 1.9vw;
  opacity: 0.7;
  border: 1px solid #275079;
  display: flex;
  justify-content: stretch;
  margin: 0.5vw;
  margin-top: 1vh;
}

.img {
  margin-top: 1.28vh;
  margin-left: 1.2vw;
  width: 1.2vw;
  height: 1.2vw;
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
</style>

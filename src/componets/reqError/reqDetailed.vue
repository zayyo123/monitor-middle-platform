<template>
  <!-- <div class="div-wrapper"> -->
  <div class="detail-container">
    <div class="left">
      <div class="horizontal">
        <p class="label">事件类型</p>
        <p class="answer">{{ record.statusCode }}</p>
      </div>
      <div class="horizontal">
        <p class="label">获取方式</p>
        <p class="answer special">{{ record.method }}</p>
      </div>
      <div class="vertical">
        <p class="title">事件内容</p>
        <p class="center">
          {{ record.response ? record.response : "no specific response" }}
        </p>
      </div>
      <div class="vertical">
        <p class="title">错误内容</p>
        <p class="center">{{ record.status }}</p>
      </div>
      <div class="vertical">
        <p class="title">发生页面</p>
        <p class="center">{{ record.url }}</p>
      </div>
      <div class="vertical">
        <p class="title">加载信息</p>
        <p class="center">...</p>
      </div>
    </div>
    <div class="line"></div>
    <div class="right">
      <div class="circlecount">
        <div class="circle1">
          <div class="circle2">
            <div class="word">
              <p class="circlecount-num">{{ miniCount }}</p>
              <p class="circlecount-title">发生总次数</p>
            </div>
          </div>
        </div>
      </div>
      <div class="error-list">
        <ul class="list-container">
          <li class="list-item" v-for="(record, index) in records" :key="index">
            <div class="list-div">
              <div class="list-name">{{ record.url }}</div>
              <div class="list-value">
                {{ timeFormatter(record.timeStamp) }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import bus from "@/utils/bus";

export default {
  name: "reqDetailed",
  data() {
    return {
      record: {},
      miniCount: 0,
      records: [],
    };
  },
  methods: {
    upload(date) {
      return (
        `${date.getFullYear()}-` +
        `${date.getMonth() + 1}-` +
        `${date.getDate()}`
      );
    },
    timeFormatter(timeStamp) {
      const date = new Date(timeStamp);
      const Y = date.getFullYear() + "-";
      const M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      const D = date.getDate() + " ";
      const h = date.getHours() + ":";
      const m = date.getMinutes() + ":";
      const s = date.getSeconds();
      return Y + M + D + h + m + s;
    },
  },
  created() {
    bus.$on("detail", (data) => {
      console.log(data, "上车成功");
      this.record = data;
      const code = data.statusCode;
      this.$req
        .get(
          "https://koa-monitorrver-koa-dxsjkmwnnu.cn-hangzhou.fcapp.run/api/mp/classifiedcount"
        )
        .then((response) => {
          // console.log("分类成功", response.data.countArray);
          const array = response.data.countArray;
          const target = array.find((obj) => obj.statusCode === code);
          this.miniCount = target.count;
        });
      this.$req
        .get(
          "https://koa-monitorrver-koa-dxsjkmwnnu.cn-hangzhou.fcapp.run/api/mp/detailedErrors?date=" +
            this.upload(new Date(Date.now()))
        )
        .then((response) => {
          // console.log("记录响应成功", response.data.detailedErrors);
          const mediumArray = response.data.detailedErrors.filter(
            (obj) => obj.statusCode === code
          );
          if (mediumArray.length <= 4) {
            this.records = mediumArray;
          } else {
            this.records = mediumArray.slice(0, 4);
          }
        });
    });
  },
  // 打卡
  beforeDestroy() {
    bus.$off("detail");
  },
  mounted() {},
};
</script>

<style scoped>
/* .div-wrapper {
  margin-right: 1.6vw;
  margin-bottom: 2.4vh;
  height: 47vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
} */

.detail-container {
  /* width: 37.4vw; */
  height: 37vh;
  background: linear-gradient(10deg, #081f37 0%, #123251 100%);
  border-radius: 0px 0px 0px 0px;
  opacity: 0.7;
  border: 0.0521vw solid #275079;
  display: flex;
  margin-top: 7.5vh;
  margin-right: 1.6vw;
  margin-bottom: 2.4vh;
}

.line {
  width: 0px;
  height: 80%;
  background: #ffffff;
  opacity: 0.5;
  border: 1px dash #ffffff;
  filter: blur(undefinedpx);
}

.left {
  flex: 0.56;
}
.right {
  flex: 0.44;
  border-left: 1px dashed #7a97b6;
  display: flex;
  flex-direction: column;
}

.horizontal {
  display: flex;
  flex-direction: row;
  margin-left: 2vw;
  margin-top: 1.5vh;
  margin-bottom: 1.5vh;
  align-items: stretch;
}

.vertical {
  display: flex;
  flex-direction: column;
  margin-left: 2vw;
  margin-bottom: 1.5vh;
}

.label {
  flex: 1;
  text-align: left;
  margin-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  font-family: AlibabaMedium;
  color: #6c9ac4;
  font-weight: 500;
  font-size: 16px;
  padding: 0;
}

.answer {
  flex: 3;
  text-align: left;
  font-family: AlibabaRegular;
  font-weight: 400;
  color: #ffffff;
  font-size: 16px;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
}

.title {
  flex: 1;
  font-family: AlibabaMedium;
  color: #6c9ac4;
  font-weight: 500;
  font-size: 16px;
  text-align: left;
  margin-top: 0;
  margin-bottom: 0;
}

.center {
  flex: 1;
  font-family: AlibabaRegular;
  font-weight: 400;
  color: #ffffff;
  font-size: 16px;
  text-align: left;
  margin-top: 0;
  margin-bottom: 0;
}

.special {
  color: #6be6c1;
}

.circlecount {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.error-list {
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle1 {
  border: 2px solid #8ed6fa;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle2 {
  border: 2px solid #6c9ac4;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circlecount-num {
  font-size: 20px;
  margin: 0;
}

.list-container {
  padding: 1vh;
}

.list-div {
  width: 14vw;
  border-bottom: 1px #707070 solid;
  margin-bottom: 1vh;
  display: flex;
  flex-direction: column;
}

.list-name {
  flex: 1;
  height: 2.2vh;
  padding-left: 0.5vw;
  text-align: left;
  font-family: AlibabaRegular;
  font-size: 12px;
  color: #6c9ac4;
}

.list-value {
  flex: 1;
  height: 2.2vh;
  text-align: left;
  padding-left: 0.5vw;
  font-family: AlibabaRegular;
  font-size: 12px;
  color: white;
}
</style>

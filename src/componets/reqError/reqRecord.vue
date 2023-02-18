<template>
  <div class="record-container">
    <div class="title-container">
      <title-component :na="na" class="title"></title-component>
      <el-date-picker
        v-model="value"
        type="date"
        placeholder="选择日期"
        class="date-picker"
        @input="uploadDate"
      >
      </el-date-picker>
    </div>
    <div class="records">
      <ul class="record-list">
        <li
          v-for="(record, index) in records"
          :key="index"
          class="list-item"
          @click="busFun(record)"
        >
          <div class="icon"></div>
          <div class="words">
            <div class="top">
              <div class="top-left">
                <div class="code">{{ record.statusCode }}</div>
                <div
                  class="method"
                  :class="'method-' + record.method.toLowerCase()"
                >
                  {{ record.method }}
                </div>
              </div>
              <div class="time">
                {{
                  typeof record.timeStamp === String
                    ? record.timeStamp
                    : timeFormatter(record.timeStamp)
                }}
              </div>
            </div>
            <div class="bottom">
              <div class="path">{{ record.url }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import titleComponent from "@/componets/HomePage/titleComponent.vue";

import bus from "@/utils/bus";

export default {
  name: "reqRecord",
  components: {
    titleComponent,
  },
  data() {
    return {
      na: "接口错误记录",
      records: [
        {
          statusCode: 404,
          method: "get",
          pathName: "https://www.test.com",
          timeStamp: "最近：12:30:40",
        },
        {
          statusCode: 500,
          method: "post",
          pathName: "https://www.test.com/message",
          timeStamp: "最近：12:30:30",
        },
        {
          statusCode: 400,
          method: "Websocket",
          pathName: "https://www.test.com",
          timeStamp: "最近：12:30:20",
        },
        {
          statusCode: 302,
          method: "get",
          pathName: "https://www.test.com",
          timeStamp: "最近：12:30:10",
        },
        {
          statusCode: 301,
          method: "post",
          pathName: "https://www.test.com",
          timeStamp: "最近：12:30:09",
        },
        {
          statusCode: 414,
          method: "get",
          pathName: "https://www.test.com",
          timeStamp: "最近：12:30:08",
        },
        {
          statusCode: 502,
          method: "get",
          pathName: "https://www.test.com",
          timeStamp: "最近：12:30:07",
        },
      ],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      value: new Date(Date.now()), //默认日期为当天
    };
  },
  methods: {
    uploadDate() {
      function upload(date) {
        return (
          `${date.getFullYear()}-` +
          `${date.getMonth() + 1}-` +
          `${date.getDate()}`
        );
      }
      console.log("日期依旧是个对象", this.value);
      this.$req
        .get(
          "https://koa-monitorrver-koa-dxsjkmwnnu.cn-hangzhou.fcapp.run/api/mp/detailedErrors?date=" +
            upload(this.value)
        )
        .then((response) => {
          console.log("记录响应成功", response.data.detailedErrors);
          this.records = response.data.detailedErrors;
          bus.$emit("detail", response.data.detailedErrors[0]); //默认传列表第一个错误
        });
    },
    timeFormatter(timeStamp) {
      const date = new Date(timeStamp);
      const h = date.getHours() + ":";
      const m = date.getMinutes() + ":";
      const s = date.getSeconds();
      return h + m + s;
    },
    busFun(record) {
      // 通过 $emit 来触发方法，参数1是定义方法名，参数2是你要发送的数据
      // console.log(record);
      // console.log("1");
      bus.$emit("detail", record);
    },
  },
  mounted() {
    this.uploadDate();
  },
};
</script>

<style scoped>
.record-container {
  margin-left: 3.6vw;
  margin-top: 1vw;
  height: 41vh;
}

.title-container {
  margin-bottom: 1.5vw;
  display: flex;
  justify-content: space-between;
}

.date-picker {
  font-family: AlibabaRegular;
  border: 0.0521vw solid #275079;
  background: linear-gradient(10deg, #081f37 0%, #123251 100%);
  font-weight: 400;
  color: white;
}

.records {
  width: 100%;
  height: 75%;
  overflow-y: scroll;
}

.records::-webkit-scrollbar {
  width: 20px;
  height: 8px;
}

.records::-webkit-scrollbar-thumb {
  border-radius: 12px;
  border: 7px solid rgba(0, 0, 0, 0);
  box-shadow: 9px 0 0 #a5adb7 inset;
  height: 120px;
}

.record-list {
  margin-top: 1vw;
  margin-right: 1vw;
}

.list-item {
  height: 9vh;
  margin-bottom: 1vh;

  border-radius: 0px 0px 0px 0px;
  opacity: 0.7;

  display: flex;
  font-family: AlibabaMedium;
}

.icon {
  width: 3.8vw;
  height: 9vh;
  background-image: url(../../assets/jsError/yuanquan.jpg);
  background-repeat: no-repeat;
}

.words {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 0.0521vw solid #275079;
  background: linear-gradient(10deg, #081f37 0%, #123251 100%);
}

.words:hover {
  background: linear-gradient(10deg, #185da5 0%, #2a70b4 100%);
  opacity: 70%;
}

.top {
  flex: 1;
  display: flex;
  justify-content: space-between;
}

.bottom {
  flex: 1;
  display: flex;
  justify-content: left;
  align-items: center;
}

.top-left {
  display: flex;
}

.code {
  line-height: 4.5vh;
  padding-left: 0.5vw;
  padding-right: 0.5vw;
  font-size: 18px;
}

.method {
  width: 5vw;
  padding-left: 0.5vw;
  text-align: left;
  line-height: 4.5vh;
  font-size: 18px;
}

.path {
  line-height: 4.5vh;
  font-size: 16px;
  padding-left: 0.5vw;
}

.time {
  line-height: 4.5vh;
  width: 7vw;
  font-size: 16px;
}

.method-get {
  color: #1990ff;
}

.method-post {
  color: #f58159;
}

.method-Websocket {
  color: #4fcea4;
}

.date-picker >>> .el-input__inner {
  background: linear-gradient(10deg, #081f37 0%, #123251 100%);
  border: 0.0521vw solid #275079;
}
</style>

<template>
  <div class="overview-container">
    <div class="top-container">
      <div class="title-container">
        <title-component :na="na" class="title"></title-component>
      </div>
      <div class="date-container">
        <el-date-picker
          class="date"
          v-model="value"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions"
          @input="uploadDate"
        >
        </el-date-picker>
      </div>
    </div>
    <div class="content" id="content"></div>
  </div>
</template>

<script>
import titleComponent from "@/componets/HomePage/titleComponent.vue";

export default {
  name: "reqOverview",
  components: {
    titleComponent,
  },
  data() {
    return {
      na: "接口错误概况",
      pickerOptions: {
        shortcuts: [
          {
            text: "最近两周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 14);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      value: [new Date(Date.now() - 1209600000), new Date(Date.now())],
      // 默认日期为当前两周
    };
  },

  methods: {
    drawChart(dateArray, countArray) {
      var chartDom = document.getElementById("content");
      var myChart = this.$echarts.init(chartDom, "dark");
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        xAxis: [
          {
            type: "category",
            axisLine: {
              show: false, //不显示轴线
            },
            axisTick: {
              show: false, //不显示刻度线
            },
            data: dateArray,
            axisPointer: {
              alignWithLabel: true, //坐标轴指示器无
            },
          },
        ],
        yAxis: [
          {
            // name: '个',
            type: "value",
            splitLine: {
              show: false, //不显示分隔线
            },
          },
        ],
        series: [
          {
            type: "bar",
            // barWidth: "17px",不设置时自适应
            data: countArray,
            color: {
              //线性渐变的颜色
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#6BE6C1", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#1A70F3", // 100% 处的颜色
                },
              ],
            },
          },
          {
            type: "line",
            symbolSize: 7, //标记的大小
            data: countArray,
            itemStyle: {
              normal: {
                color: "#FFFFFF", //改变折线点的颜色
                lineStyle: {
                  color: "#466AEB", //改变折线颜色
                  width: 1, // 0.1的线条是非常细的了
                },
              },
            },
          },
        ],
        grid: [
          {
            left: "5%", //grid 组件离容器左侧的距离
            bottom: "10%",
            top: "13%",
            right: "5%",
          },
        ],
        backgroundColor: "#000000",
      };

      myChart.setOption(option);
      window.onresize = function () {
        myChart.resize();
      };
    },

    uploadDate() {
      function upload(date) {
        return (
          `${date.getFullYear()}-` +
          `${date.getMonth() + 1}-` +
          `${date.getDate()}`
        );
      }
      function makeDateArray(array) {
        return array.map((obj) => obj.date.substring(5));
      }
      function makeCountArray(array) {
        return array.map((obj) => obj.count);
      }
      console.log("日期对象", this.value);
      console.log("开始日期", upload(this.value[0]));
      console.log("结束日期", upload(this.value[1]));
      this.$req
        .get(
          "https://koa-monitorrver-koa-dxsjkmwnnu.cn-hangzhou.fcapp.run/api/mp/longTermErrors?startDate=" +
            upload(this.value[0]) +
            "&endDate=" +
            upload(this.value[1])
        )
        .then((response) => {
          console.log("请求成功", response);
          const errors = response.data.longTermErrors.reverse();
          this.drawChart(makeDateArray(errors), makeCountArray(errors));
        });
    },
  },

  mounted() {
    this.uploadDate();
  },
};
</script>

<style scoped>
.overview-container {
  display: flex;
  justify-content: stretch;
  flex-direction: column;
  margin-left: 3.6vw;
}

.top-container {
  flex: 1;
  display: flex;
  justify-content: space-between;
}

.date {
  font-family: AlibabaRegular;
  border: 0.0521vw solid #275079;
  background: linear-gradient(10deg, #081f37 0%, #123251 100%);
  font-weight: 400;
  color: white;
}

.content {
  width: 100%;
  height: 32.5vh;
  border: 0.3px dashed #a485e6;
}

.date >>> .el-range-input {
  background: linear-gradient(10deg, #081f37 0%, #123251 100%);
}
</style>

<template>
  <div class="trend" id="trend"></div>
</template>

<script>
export default {
  name: "reqTrend",
  data () {
    return {};
  },
  mounted () {
    const chartDom = document.getElementById("trend");
    const myChart = this.$echarts.init(chartDom, "dark");
    let option = {
      grid: [
        {
          left: "10%",
          bottom: "10%",
          top: "30%",
          right: "10%",
        },
      ],
      title: {
        padding: [10, 0, 0, 0],
        show: true, //显示策略，默认值true,可选为：true（显示） | false（隐藏）
        text: "24小时报错趋势",
        textStyle: {
          //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
          fontFamily: "AlibabaMedium",
          fontSize: 15,
          fontWeight: "200",
          color: "#739FC7",
        },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985",
          },
        },
        showContent: true,
      },
      backgroundColor: "",
      xAxis: {
        type: "category",
        data: ["7-24", "7-26", "7-27", "7-28", "7-29", "7-30"], // 时间
        boundaryGap: false,
        lineStyle: {
          color: "#647483",
        },
        axisTick: {
          show: false,
        },
      },

      yAxis: {
        type: "value",
        data: ["10", "20", "30", "40", "70", "100"],
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          name: "同步错误",
          type: "line",
          data: [10, 20, 78, 80, 40, 10],
          symbol: "none",
          lineStyle: {
            // 设置线条的style等
            normal: {
              color: "#4E6CBD", // 折线线条颜色:红色
            },
          },
          itemStyle: {
            // 设置线条上点的颜色（和图例的颜色）
            normal: {
              color: "#FFFFFF",
            },
          },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                // 渐变颜色
                {
                  offset: 0,
                  color: "#4D6CF3",
                },
                {
                  offset: 1,
                  color: "#092134",
                },
              ],
              global: false,
            },
          },
        },
      ],
    };
    myChart.setOption(option);
    window.onresize = function () {
      myChart.resize();
    };
  },
};
</script>

<style scoped>
.trend {
  width: 14vw;
  height: 23vh;
  margin: 0 0 0vh 2.5vw;
}
</style>

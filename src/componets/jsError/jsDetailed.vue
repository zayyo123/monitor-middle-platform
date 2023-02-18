<template>
  <div class="jsDetailed">
    <!-- <div class="jsDetailed-left">
      <p class="jsTypeTitle jstitle pBlock">事件类型</p>
      <p class="jsTypeValue pBlock">jsError</p>
      <p class="jsTimeV pBlock">{{ errorDetailed[current].timeStamp }}</p>
      <p class="jsContentT jstitle">事件内容</p>
      <p class="jsContentV jsValue">{{ errorDetailed[current].message }}</p>
      <p class="errorContentT jstitle">错误内容</p>
      <p class="errorContentV jsValue">{{ errorDetailed[current].detail }}</p>
      <p class="jsUrlT jstitle">发生页面</p>
      <p class="jsUrV jsValue">{{ errorDetailed[current].simpleUrl }}</p>
      <p class="jsInfoT jstitle">错误定位</p>
      <p class="jsInfoV jsValue">
        错误代码行列 行：{{ errorDetailed[current].Position.row }}，列：{{
          errorDetailed[current].Position.column
        }}
      </p>
      <el-button type="success" class="buttonStyle" @click="solve"
        >解决</el-button
      >
      <el-button type="warning" class="buttonStyle" @click="neglect"
        >忽略</el-button
      >
    </div> -->
    <div class="jsDetailed-left">
      <div>
        <span class="jsTypeTitle jstitle">事件类型</span>
        <span class="jsTypeValue">jsError</span>
        <span class="jsTimeV">{{ errorDetailed[current].timeStamp }}</span>
      </div>
      <div class="title">
        <span class="jsTypeTitle jstitle">事件内容</span>
      </div>
      <span class="jsContentV jsValue">{{ errorDetailed[current].message }}</span>
      <div class="title">
        <span class="jsTypeTitle jstitle">错误内容</span>
      </div>
      <span class="jsContentV jsValue">{{ errorDetailed[current].detail }}</span>
      <div class="title">
        <span class="jsTypeTitle jstitle">发生页面</span>
      </div>
      <span class="jsContentV jsValue">{{ errorDetailed[current].simpleUrl }}</span>

      <div class="title">
        <span class="jsTypeTitle jstitle">错误定位</span>
      </div>
      <span class="jsContentV jsValue">
        错误代码行列 行：{{ errorDetailed[current].Position.row }}，列：{{
          errorDetailed[current].Position.column
        }}
      </span>
      <div class="title">
        <span class="jsTypeTitle jstitle">错误回放</span>
      </div>
      <div id="replaybox" ref="replaybox" style="height:200px; width: 100%; background: white"></div>
      <div class="jserror-btn">
        <el-button type="success" class="buttonStyle" @click="solve"
          >解决</el-button
        >
        <el-button type="warning" class="buttonStyle" @click="neglect"
          >忽略</el-button
        >
      </div>
    </div>
    <div class="jsDetailed-right">
      <!-- 圆 -->
      <div class="errorCount1 circle">
        <div class="errorCount2 circle">
          <p class="errorCount-num">
            {{ errorDetailed[current].errorCount }}
          </p>
          <p class="errorCount-title">发生总次数</p>
        </div>
      </div>
      <!-- 趋势图 -->
      <div class="trend" id="trend"></div>
    </div>
  </div>
</template>

<script>
import { getJsError } from '@/services/jsError/request'
import replayjs from '../../assets/json/replay.json'
import rrwebPlayer from 'rrweb-player';
export default {
  props: {
    errorDetailed: {
      type: Array,
      default () {
        return []
      }
    },
    current: {
      type: Number,
      default: 0
    }
  },
  name: 'jsDetailed',
  data () {
    return {
      data1: [],
    }
  },
  watch: {
    current (val) {
      if (val) {
        let seriesData = this.errorDetailed[val].errorStatistics.map(function (item) {
          return item.errorCount
        })
        this.drawChart(seriesData)
      }
    },
    immediate: true
  },
  created() {
    getJsError().then(res => {
      this.data1 = res.data.result[0].errorStatistics
      let seriesData = this.data1.map(function (item) {
        return item.errorCount
      })
      this.drawChart(seriesData)
    })
  },
  mounted () {
    let timer = setInterval(() => {
      const dom = this.$refs.replaybox
      if(!dom) return
      new rrwebPlayer({
        target: dom, // 可以自定义 DOM 元素
        // 配置项
        props: {
          events: replayjs.record,
          width: dom.offsetWidth,
          height: dom.offsetHeight,
          showController: false
        },
      });
      clearInterval(timer)
    }, 1000)
  },
  methods: {
    solve () {
      this.$emit('solve')
    },
    neglect () {
      this.$emit('neglect')
    },
    drawChart (seriesData) {
      const chartDom = document.getElementById('trend')
      const myChart = this.$echarts.init(chartDom, 'dark')
      let option = {
        grid: [{
          left: '15%',
          bottom: '10%',
          top: '20%',
          right: '10%'
        }],
        title: {
          padding: [10, 0, 0, 0],
          show: true, //显示策略，默认值true,可选为：true（显示） | false（隐藏）
          text: '24小时报错趋势',
          textStyle: { //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
            fontFamily: 'AlibabaMedium',
            fontSize: 15,
            fontWeight: '200',
            color: '#739FC7'
          },
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          },
          showContent: true,
        }
        ,
        backgroundColor: '',
        xAxis: {
          type: 'category',
          data: ['00', '04', '08', '12', '16', '20'], // 时间
          boundaryGap: false,
          lineStyle: {
            color: '#647483'
          },
          axisTick: {
            show: false
          },
        },

        yAxis: {
          type: 'value',
          data: ['0', '5', '10', '15', '20', '25'],
          splitLine: {
            show: false
          }
        },
        series: [{
          name: '错误',
          type: 'line',
          data: seriesData,
          symbol: 'none',
          lineStyle: {
            // 设置线条的style等
            normal: {
              color: '#4E6CBD'
            }
          },
          itemStyle: {
            // 设置线条上点的颜色（和图例的颜色）
            normal: {
              color: '#FFFFFF'
            }
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                // 渐变颜色
                {
                  offset: 0,
                  color: '#4D6CF3'
                },
                {
                  offset: 1,
                  color: '#092134'
                }
              ],
              global: false
            }
          }
        },
        ]
      };
      myChart.setOption(option)
      window.onresize = function () {
        myChart.resize();
      }
    }
  },
}
</script>

<style lang="scss" scoped>
* {
  text-align: left;
}
.jsDetailed {
  width: 41.4vw;
  height: 40vh;
  background: linear-gradient(10deg, #081f37 0%, #123251 100%);
  opacity: 0.7;
  border: 1px solid #275079;
  margin: 0 -5vw 0 2vw;
  display: flex;
}
 .jsDetailed-left {
  position: relative;
  padding: 20px 34px;
  width: 20vw;
  overflow-y: scroll;
}
.jsDetailed-left::-webkit-scrollbar{
  width: 0px;
}
.jserror-btn {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.jsDetailed-right {
  width: 20vw;
  height: 40vh;
  border-left: 1px dashed #7a97b6;
}
.jstitle {
  width: 71px;
  height: 25px;
  font-size: clamp(0.5rem, 1vw, 4rem);
  font-family: AlibabaMedium;
  color: #789dc3;
  font-weight: 500;
  margin: 0px 0px 0px 0.7vw;
  padding: 0;
}
.title {
  margin-top: 17px;
  margin-bottom: 2px;
}
.pBlock {
  display: inline-block;
}
.jsTypeTitle {
  margin-left: -0.3vw !important;
  width: 71px !important;
  margin-bottom: 1vh;
}
.jsValue {
  width: 350px;
  height: 25px;
  font-size: clamp(-1rem, 0.9vw, 4rem);
  font-family: AlibabaRegular;
  font-weight: 400;
  color: #ffffff;
  margin: 0 0 0 0;
}
.jsTimeV {
  color: #ffffff;
  font-size: clamp(-1rem, 0.8vw, 4rem);
  margin: 2vh 0 0 2.6vw;
}
.jsTypeValue {
  color: #ffffff;
  font-size: clamp(-1rem, 0.9vw, 4rem);
  margin: 0 0 1vw 0;
  margin: 2vh 0 0 1vw;
}
.jsContentV {
  text-align: left;
}
.errorContentV {
  margin: 0 0 0.8vh 1.2vw;
}
.jsUrV {
  margin: 0px 0 0.8vh 1.2vw;
}
.jsInfoV {
  margin: 0 0 0.8vh 1.2vw;
}
.buttonStyle {
  width: 98px;
  height: 30px;
  border-radius: 5px 5px 5px 5px;
  opacity: 1;
  font-family: AlibabaRegular;
  font-weight: 400;
  font-size: clamp(-1rem, 0.8vw, 4rem);
  color: #ffffff;
  line-height: 1px;
}
.el-button--success {
  background: rgba(7, 90, 65, 0.92);
  border: 1px solid #6be6c1;
  margin: 0 1vw 0 1vw;
}
.el-button--warning {
  background: #682d00;
  border: 1px solid #ff750c;
  margin: 0 1vw 0 1vw;
}
.circle {
  border-radius: 100px;
}
.errorCount1 {
  border: 2px solid #8ed6fa;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-top: 2vmin;
}
.errorCount2 {
  display: flex;
  border: 1px solid #8ed6fa;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  margin-top: 1vmin;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.errorCount2 p {
  color: #ffffff;
}
.errorCount-num {
  margin: 0;
  font-size: clamp(-1rem, 1.5vw, 4rem);
  font-weight: 600;
  font-family: AlibabaRegular;
}
.errorCount-title {
  margin: 0;
  font-size: clamp(-1rem, 0.2vw, 4rem);
  font-family: AlibabaMedium;
}
.trend {
  width: 16vw;
  height: 23vh;
  margin: 0 0 0vh 2vw;
}
p {
  text-align: left;
}
div[flex-left] {
  div{
    text-align: left;
  }
}
</style>

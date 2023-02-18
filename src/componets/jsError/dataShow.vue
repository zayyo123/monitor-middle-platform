<template>
  <div>
    <!-- 上半部分 -->
    <div class="heater">
      <!-- 选择框 -->
      <el-select
        placeholder="监测组件"
        v-model="channel"
        :popper-append-to-body="false"
      >
        <el-option label="全部组件" value="全部组件"> </el-option>
      </el-select>
      <div class="elOption">
        <el-date-picker
          v-model="value"
          type="daterange"
          start-placeholder="2022-08-13"
          end-placeholder="2022-08-26"
          :default-time="['00:00:00', '23:59:59']"
        >
        </el-date-picker>
      </div>
      <div class="jseTitle">
        <i class="el-icon-caret-right" id="el-icon-caret-right"></i>
        <p class="jseH1">JS错误概况</p>
      </div>
    </div>
    <!-- 下半部分展示 -->
    <div class="contemt" id="contemt"></div>
  </div>
</template>

<script>
import { jsSituation } from '@/services/jsError/request'

export default {
  name: 'dataShow',
  data () {
    return {
      channel: "全部组件",
      value: ''
    }
  },
  mounted () {
    jsSituation().then(res => {
      this.data = res.data.result
      let day = this.data.map(function (item) {
        return item.day
      })
      let errorCount = this.data.map(function (item) {
        return item.errorCount
      })

      var chartDom = document.getElementById('contemt');
      var myChart = this.$echarts.init(chartDom, 'dark');
      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          }
        },
        xAxis: [
          {
            type: 'category',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            data: day,
            axisPointer: {
              alignWithLabel: true
            }, axisLabel: {
              interval: 0
            }
          }
        ],
        yAxis: [
          {
            // name: '个',
            type: 'value',
            splitLine: {
              show: false
            }
          }
        ],
        series: [{
          type: 'bar',
          barWidth: '17px',
          data: errorCount,
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: '#6BE6C1' // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#1A70F3' // 100% 处的颜色
            }
            ],
          },
        },
        {
          type: 'line',
          symbolSize: 7,
          data: errorCount,
          itemStyle: {
            normal: {
              color: "#FFFFFF", //改变折线点的颜色
              lineStyle: {
                color: "#466AEB", //改变折线颜色
                width: 1// 0.1的线条是非常细的了
              },
            },
          },
        }],
        grid: [{
          left: '100px',
          bottom: '30px',
          top: '13%',
          right: '100px'
        }],
        backgroundColor: '#000000',
      };

      myChart.setOption(option);
      window.onresize = function () {
        myChart.resize();
      };
    })

  }

}
</script>

<style scoped lang="less" >
.heater {
  height: 19vh;
  width: 59vw;
}
.contemt {
  width: 56vw;
  height: 30.9vh;
  border: 0.3px dashed #a485e6;
}
/* jsErrorTitle */
#el-icon-caret-right {
  color: #2cbeff;
  width: 5px;
  height: 15px;
  margin-top: 1.6vh;
  font-size: 1.1vw;
}
.jseTitle {
  width: 200px;
  height: 30px;
  display: flex;
  justify-content: left;
  position: absolute;
  top: 10vh;
  left: 17.5vw;
}
.jseH1 {
  font-size: clamp(1rem, 1.3vw, 4rem);
  font-family: Alibaba;
  font-weight: 400;
  color: #ffffff;
  margin-left: 0.8vw;
  line-height: 7px;
}

/* 下拉框 */
.el-select {
  width: 10vw;
  position: absolute;
  left: 17.5vw;
  top: 3vh;
  font-family: AlibabaMedium;
  font-weight: 400;
}
/*  设置输入框的背景色、字体颜色、边框属性设置； */
::v-deep .el-input__inner {
  background: linear-gradient(to right, #081f37, #123251);
  border-color: #203d53;
  border-radius: 0;
}

/* 设置下拉框的 ，滚动条*/
::v-deep .el-scrollbar,
::v-deep .el-select-dropdown {
  background-color: #000000;
  border-color: #7c97c0;
}
/* 下拉框的 选项和外围*/
::v-deep .el-scrollbar__wrap,
::v-deep .el-select-dropdown__list {
  background-color: #000000;
  color: #fff !important;
}
/* 设置下拉框的属性 */
::v-deep .el-select-dropdown__item {
  width: 168px;
  margin: 0 auto;
  text-align: left;
  background-color: #000000;
  border-bottom: 1px solid #6e716e;
  font-size: 16px;
  font-family: Alibaba PuHuiTi-Regular, Alibaba PuHuiTi;
  font-weight: 400;
  color: #ffffff;
  border-radius: 25px;
}
.el-select-dropdown__item:last-child {
  border-bottom: none;
}
.elOption {
  position: relative;
  left: 15vw;
  top: 9vh;
}
::v-deep .el-range-input {
  background: linear-gradient(#081f37, #123251);
  opacity: 0.3;
  color: #ffffff;
}
</style>
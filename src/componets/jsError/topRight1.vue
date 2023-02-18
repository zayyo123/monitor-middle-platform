<template>
  <div class="topright">
    <a
      href="https://gitee.com/re-vue-monitor/monitor-middle-platform"
      class="md"
    >
      <img src="../../assets/组 67.png" alt="" class="img" />
      <p>使用文档</p>
    </a>
    <div class="hTitle">
      <i class="el-icon-caret-right" id="el-icon-caret-right"></i>
      <p class="hp">健康状况</p>
    </div>

    <div id="heathStatus"></div>
    <p class="grade">优秀</p>
  </div>
</template>

<script>
import { jshealth } from '@/services/jsError/request';

export default {
  name: 'topRight',
  data () {
    return {
    }
  },

  mounted () {

    jshealth().then(res => {
      let health = res.data.health


      var chartDom = document.getElementById('heathStatus');
      var myChart = this.$echarts.init(chartDom, 'dark');
      //反方向剩下部分的样式

      var options = {
        title: {
          // 图形标题(如果想要换行则使用ES6 `` 模板字符串)
          // 例如： `示例
          //   这里的文字会变为第二行(因为会保留格式)
          //  `
          text: health,
          subtext: '分',
          left: "center",//对齐方式居中
          top: "35%",//距离顶部
          textStyle: {//文字配置
            color: "#FFFF",//文字颜色
            fontSize: 40,//字号
            align: "center"//对齐方式
          },
          subtextStyle: {//副标题文本样式{"color": "#aaa"}
            color: "#FFFF",//文字颜色
            fontSize: 15,//字号
            align: "center"//对齐方式
          },
        },

        backgroundColor: ' ',
        series: [{
          type: 'pie',
          clockWise: true, //顺时加载
          hoverAnimation: false, //鼠标移入变大
          //饼图半径的调节，第一个是内半径，第二个是外半径
          radius: [50, 50],
          itemStyle: {
            normal: {
              label: {
                show: false,
                position: 'outside'
              },

              borderWidth: 1,
              borderColor: "#A2C2C0",

            }
          },
          data: [{
            value: health,
          },
          {
            value: (100 - health),
            name: '',
            itemStyle: {
              normal: {
                label: {
                  show: false,
                  position: "center"
                },
                labelLine: {
                  show: false
                },
                color: "rgba(0,0,0,0)",
                borderColor: "rgba(0,0,0,0)",
                borderWidth: 0
              },
              emphasis: {
                color: "#dedede",
                borderColor: "#dedede",
                borderWidth: 0
              }
            }
          }
          ]
        }, {
          type: 'pie',
          clockWise: true,
          hoverAnimation: false,
          radius: [65, 65],
          itemStyle: {
            normal: {
              label: {
                show: false
              },
              borderWidth: 10,
              borderColor: "#BA1DEF",
            }
          },
          data: [{
            value: health,
          },
          {
            value: (100 - health),
            name: '',
            itemStyle: {
              normal: {
                label: {
                  show: false,
                  position: "center"
                },
                labelLine: {
                  show: false
                },
                color: "rgba(0,0,0,0)",
                borderColor: "rgba(0,0,0,0)",
                borderWidth: 0
              },
              emphasis: {
                color: "#dedede",
                borderColor: "#dedede",
                borderWidth: 0
              }
            }
          }
          ]
        },]
      };
      myChart.setOption(options);
    })


  }
}
</script>

<style  scoped>
.topright {
  width: 16vw;
  height: 50vh;
  margin: 3vh 0 0 2vw;
  background-color: #000000;
}

#heathStatus {
  width: 11vw;
  height: 21vh;
  background-color: #fff;
  margin: 17vh 0 0 3vw;
}
.md {
  position: fixed;
  top: 3.1vh;
  right: 2vw;
  width: 8.3333vw;
  height: 5vh;
  background: linear-gradient(10deg, #081f37 0%, #123251 100%);
  border-radius: 27px 27px 27px 27px;
  opacity: 0.7;
  border: 1px solid #275079;
  display: flex;
  justify-content: space-around;
  vertical-align: center;
}
.img {
  margin-top: 1.28vh;
  margin-left: 1.3021vw;
  width: 1.0938vw;
  height: 2.3vh;
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
/* title */
#el-icon-caret-right {
  color: #2cbeff;
  width: 5px;
  height: 15px;
  margin-top: 1.6vh;
  font-size: 1.1vw;
}
.hTitle {
  width: 140px;
  height: 30px;
  display: flex;
  justify-content: left;
  position: absolute;
  top: 10vh;
  left: 76vw;
}
.hp {
  font-size: clamp(1rem, 1.3vw, 4rem);
  font-family: Alibaba;
  font-weight: 400;
  color: #ffffff;
  margin-left: 0.8vw;
  line-height: 7px;
}
.grade {
  margin: 3vh 0 0 5.5vw;
  font-size: clamp(1rem, 1.3vw, 4rem);
  font-family: AlibabaMedium;
}
</style>
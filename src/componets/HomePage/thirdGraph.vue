<!--
 * @Author: Ryker
 * @Date: 2022-08-06 20:24:35
 * @LastEditors: 18062706139 2279549769@qq.com
 * @LastEditTime: 2022-08-25 09:38:37
-->
<template>
<div style="display: flex; justify-content: left; flex-direction: column">
    <title-component :na="na"></title-component>
    <div style="display: flex; justify-content: left; flex-direction: row" class="container3">
        <div id="main1" style="width: calc((100vw / 7 * 2 - 64px) * 5 / 8)"></div>
        <four-graph :loadData="loadData" ref="four"></four-graph>
    </div>
</div>
</template>

<script>
import titleComponent from './titleComponent.vue'
// import titleComponent from '@/componets/HomePage/title.vue';
import fourGraph from './fourGraph.vue'
import {
    getLoadArr
} from '@/services/performance'

export default {
    name: 'thirdGraph',
    components: {
        titleComponent,
        fourGraph,
    },
    data() {
        return {
            na: '页面访问速度分布',
            loadArr: [],
            best: 0,
            good: 0,
            bad: 0,
            badest: 0,
            loadData: [],
        }
    },
    methods: {
        async getLoadArr() {
            const res = await getLoadArr()
            this.loadArr = res.data.result
            this.loadArr.forEach((item) => {
                if (item.loadTime < 1000) {
                    this.best++
                } else if (item.loadTime < 3000) {
                    console.log(item.loadTime)
                    this.good++
                } else if (item.loadTime < 5000) {
                    this.bad++
                } else {
                    this.badest++
                }
            })
            this.loadData.push(this.best)
            this.loadData.push(this.good)
            this.loadData.push(this.bad)
            this.loadData.push(this.badest)
            console.log(this.loadData, 'dddddddddd')
            console.log(this.$refs.four.getData())
            this.getPicture()
        },
        getPicture() {
            const chartDom1 = document.getElementById('main1')
            const myChart1 = this.$echarts.init(chartDom1, 'dark')
            var option1

            const seriesLabel = {
                show: true,
                position: 'right',
            }
            option1 = {
                grid: {
                    left: '10%',
                    // right: '30%',
                    bottom: '0%',
                    top: '0%',
                    containLabel: true,
                },
                backgroundColor: '#000000',
                // title: {
                //     text: '页面访问速度分布',
                //     textStyle: {
                //         fontFamily: "Alibaba",
                //         fontSize: 18,
                //         color: "#fff",
                //     }
                // },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    },
                },
                // grid: {
                //     left: 100
                // },
                // toolbox: {
                //   show: true,
                //   feature: {
                //     saveAsImage: {}
                //   }
                // },
                xAxis: {
                    type: 'value',
                    show: false,
                    axisLabel: {
                        formatter: '{value}',
                    },
                    splitLine: {
                        show: false,
                    },
                    color: 'black',
                },
                yAxis: {
                    axisLine: {
                        lineStyle: {
                            color: '#000',
                            width: 1, //这里是为了突出显示加上的
                        },
                    },
                    splitLine: {
                        show: false,
                    },
                    boundaryGap: true,
                    type: 'category',
                    inverse: true,
                    data: ['0', '1', '2', '3'],
                    axisLabel: {
                        interval: 0,
                        formatter: function (value) {
                            if (parseInt(value) == 0) {
                                return '{' + value + '| } {value|' + '< 1秒   ' + '}'
                            } else if (parseInt(value) == 1) {
                                return '{' + value + '| } {value|' + '1-3秒   ' + '}'
                            } else if (parseInt(value) == 2) {
                                return '{' + value + '| } {value|' + '3-5秒  ' + '}'
                            } else {
                                return '{' + value + '| } {value|' + '5秒以上' + '}'
                            }
                        },
                        margin: 20,
                        rich: {
                            value: {
                                lineHeight: 30,
                                align: 'center',
                            },
                            0: {
                                height: 8,
                                width: 8,
                                align: 'center',
                                backgroundColor: '#8ED6FA ',
                                borderRadius: 10,
                            },
                            1: {
                                height: 8,
                                width: 8,
                                align: 'center',
                                backgroundColor: '#6BE6C1 ',
                                borderRadius: 10,
                            },
                            2: {
                                height: 8,
                                width: 8,
                                align: 'center',
                                backgroundColor: '#466AEB ',
                                borderRadius: 10,
                            },
                            3: {
                                height: 8,
                                width: 8,
                                align: 'center',
                                backgroundColor: '#466AEB ',
                                borderRadius: 10,
                            },
                        },
                    },
                },
                series: [{
                    name: 'City Beta',
                    type: 'bar',
                    label: seriesLabel,
                    data: this.loadData,
                    barWidth: 13,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [{
                                offset: 0,
                                color: '#1A70F3', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#6BE6C1 ', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                    // barCategoryGap: '100%',
                    // boundaryGap: ['10%','10%','10%','20%']
                }, ],
            }
            myChart1.setOption(option1)
        }
    },
    mounted() {
      this.getLoadArr()
    },
}
</script>

<style scoped></style>

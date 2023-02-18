<!--
 * @Author: Ryker
 * @Date: 2022-08-06 23:24:20
 * @LastEditors: 18062706139 2279549769@qq.com
 * @LastEditTime: 2022-08-25 09:45:53
-->
<template>
<div class="mmain">
    <div class="main8">
        <title-component :na="na"></title-component>
        <div id="main8" style="height: calc((100vw / 7 * 2 - 99px) * 0.67); width: calc(100vw / 7 * 2 - 99px)"></div>
    </div>
</div>
</template>

<script>
import titleComponent from '@/componets/HomePage/titleComponent.vue'
// import titleComponent from '@/componets/HomePage/titleComponent.vue';
export default {
    components: {
        titleComponent
    },
    name: 'eightGraph',
    comments: {
        titleComponent
    },
    data() {
        return {
            jiekouTime: ['7-24', '7-25', '7-26', '7-27', '7-28', '7-29', '7-30'] || [],
            jiekouErrorNumber: [10, 52, 200, 334, 390, 330, 220] || [],
            na: '接口错误趋势',
        }
    },
    methods: {
        async getInfo() {
            const res = await this.$req.get('/httpErrorPerDay')
            const data = res.data
            if(data.status === 0) {
                const ans = data._7dayErrors
                this.jiekouTime = []
                this.jiekouErrorNumber = []
                this.jiekouTime = ans.map((item) => item.day.slice(-4))
                this.jiekouErrorNumber = ans.map((item) => item.count)
                this.getPicture()
            } else {
                console.log('出现错误')
            }
        },
        getPicture() {
            var chartDom4 = document.getElementById('main8');
            var myChart4 = this.$echarts.init(chartDom4, 'dark');
            var option4;

            option4 = {
                backgroundColor: '#000000',
                // title: {
                //     text: '接口错误趋势'
                // },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: this.jiekouTime,
                    axisTick: {
                        alignWithLabel: true
                    }
                }],
                yAxis: [{
                    type: 'value',
                    splitLine: {
                        show: false
                    }
                }],
                series: [{
                    name: 'Direct',
                    type: 'bar',
                    barWidth: '60%',
                    data: this.jiekouErrorNumber,
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
                        global: false // 缺省为 false
                    }
                }]
            };

            myChart4.setOption(option4);

        }
    },
    mounted() {
        this.getInfo()
    }
}
</script>

<style scoped>
.main8 {
    margin-top: 36px;
}
</style>

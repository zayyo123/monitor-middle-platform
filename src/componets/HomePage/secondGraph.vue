
<template>
<div class="mainContainer1">
    <div class="word"><title-componentVue :na="na"></title-componentVue></div>
    <div class="graph">
   
            <div class="top">
                <div class="firstPart">
                    <p class="titl">FP平均时间（ms）</p>
                    <p class="center">{{FP}}</p>
                </div>
                <div class="secondPart">
                    <p class="titl">FCP平均时间(ms)</p>
                    <p class="center">{{FCP}}</p>
                </div>
            </div>
            <div class="line"></div>
            <div class="bottom">
                <div class="thirdPart">
                <p class="titl">FMP平均时间(ms)</p>
                    <p class="center">{{FMP}}</p></div>
                <div class="fourPart">
                    <p class="titl">LCP平均时间(ms)</p>
                    <p class="center">{{LCP}}</p></div>
            </div>
        </div>
</div>
</template>

<script>
import titleComponentVue from './titleComponent.vue'
export default {
    name: 'secondGraph',
    components: {
        titleComponentVue
    },  
    data() {
        return {
            FP: 0,
            FCP: 0,
            FMP: 0,
            LCP: 0,
            na: '页面性能'
        }
    },
    mounted() {
        this.getInfo()
    },
    methods: {
        async getInfo() {
            const res = await this.$req.get('https://koa-monitorrver-koa-dxsjkmwnnu.cn-hangzhou.fcapp.run/api/mp/paintTime')
            const data = res.data.result
            for(let i=0;i<data.length;i++) {
                this.FP += parseInt(data[i].firstPaint)
                this.FCP += data[i].firstContentfulPaint
                this.FMP += data[i].firstMeaningfulPaint
                this.LCP += data[i].largestContentfulPaint
            }
            this.FP /= 7
            this.FCP /= 7
            this.FMP /= 7
            this.LCP /= 7
            this.FP = this.FP.toFixed(2)
            this.FCP = this.FCP.toFixed(2)
            this.FMP = this.FMP.toFixed(2)
            this.LCP = this.LCP.toFixed(2)
        }
    }
}
</script>

<style scoped>
.mainContainer1 {
    color: #fff;
    background-color: black;
    width: calc(100vw / 7 * 2 - 74px);

    display: flex !important;
    flex-direction: column !important;
}

.word {
    font-family: Alibaba;
    margin-bottom: 19px;
    height: 20px;
    text-align: left;
    font-size: 20px;
}

.graph {
    width: calc(100vw / 7 * 2 - 74px);
    background-color: #081F37;
    padding: 18px 38px 10px 38px;
    box-sizing: border-box;
}


.top {
    width: 100%;
    display: flex;
}

.bottom {
    display: flex;
    margin-top: 18px;
}

.firstPart {
    width: 50%;
    height: 100%;
}

.thirdPart {
    width: 50%;
    height: 100%;
}

.line {
    width: 100%;
    height: 0px;
    background: #FFFFFF;
    opacity: 0.5;
    border: 1px solid #FFFFFF;
    filter: blur(undefinedpx);
}
.titl {
    margin: 0;
    font-family: AlibabaRegular;
    color: #82A1BF;
    text-align: left;
    margin-left: 10px;
    font-size: 0.6vw;
}
.center {
    margin-top: 8px;
    text-align: left;
    margin-left: 10px;
    font-family: AlibabaMedium;
    font-size: 0.7vw;
    margin-bottom: 8px;
}
</style>

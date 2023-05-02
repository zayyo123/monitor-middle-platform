
<template>
<div class="mainContainer9">
    <!-- <div class="leftPart"></div> -->
    <div class="rightPart">
        <div class="words9">接口错误记录</div>
        <card-componet class="card-componet" :status="status[0]" :method="method[0]" :link="link[0]" :time="time[0]"></card-componet>
        <card-componet class="card-componet" :status="status[1]" :method="method[1]" :link="link[1]" :time="time[1]"></card-componet>
        <card-componet class="card-componet" :status="status[2]" :method="method[2]" :link="link[2]" :time="time[2]"></card-componet>
        <!-- <card-componet :status="200" :method="get" :link="213" :time="132"></card-componet>
        <card-componet :status="200" :method="get" :link="123" :time="312"></card-componet>
        <card-componet :status="200" :method="get" :link="321" :time="312"></card-componet> -->
    </div>
</div>
</template>

<script>
import cardComponet from './cardComponet.vue'
export default {
    name: 'nineGraph',
    data() {
        return {
            status: [],
            method: [],
            link: [],
            time: []
        }
    },
    components: {
        cardComponet
    },
    mounted() {
        this.getThreeError()
    },
    methods: {
        getThreeError() {
            this.$req.get('/last3error')
            .then(res => {
                console.log(res)
                if(res.status === 200) {
                    const data = res.data.last3error
                    for(let i=0;i<data.length;i++) {
                        this.status.push(data[i].statusCode)
                        this.method.push(data[i].method)
                        this.link.push(data[i].url)
                        this.time.push((new Date(data[i].timeStamp) + '').slice(0, 24))
                    }
                } else {
                    console.log('出现错误')
                }
            })
        }
    }
}
</script>

<style scoped>
.mainContainer9 {
    display: flex;
    width: calc(100vw / 7 * 2 - 99px);
    flex-direction: row;
}

.words9 {
    font-size: 1.4rem;
    color: #fff;
    display: flex;
    justify-content: left;
    margin-top: 1rem;
    margin-bottom: 2rem;
}


.leftPart {
    width: 0px;
    height: calc(100vw / 10 * 2);
    opacity: 0.29;
    border: 1px solid #FFFFFF;
    margin-right: 1rem;
    margin-top: 4.4rem
}

.rightPart {
    display: flex;
    flex-direction: column;
}

</style>

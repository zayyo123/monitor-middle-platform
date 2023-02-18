<!--
 * @Author: Ryker
 * @Date: 2022-08-06 21:58:02
 * @LastEditors: 18062706139 2279549769@qq.com
 * @LastEditTime: 2022-08-30 17:00:51
-->
<template>
<div class="mainContainerSix">
    <div class="first section"><img src="@/assets/homePage/left.png" alt="" class="firstImg">
        <div class="words">
            <p class="tl">今日访问流量(PV)</p>
            <p class="cen">{{PV}}</p>
        </div>
    </div>
    <div class="second section"><img src="@/assets/homePage/right.png" alt="" class="firstImg">
        <div class="words">
            <p class="tl">今日用户量(PV)</p>
            <p class="cen">{{UV}}</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'sixGraph',
    data() {
        return {
            PV: 34,
            UV: 8
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>
.mainContainerSix {
    display: flex;
    justify-content: space-around;

}

.section {
    width: 20px;
    margin-top: 36px;
    height: 20px;
    background-color: #081F37;
}

.first {
    margin-right: 46px;
    height: calc((100vw / 7 * 2 - 99px) * 0.2);
    width: calc((100vw / 7 * 2 - 99px) * 0.65);
    display: flex;
    align-items: center;
}

.firstImg {
    margin-left: 1.6vw;
}

.second {
    margin-left: 46px;
    height: calc((100vw / 7 * 2 - 99px) * 0.2);
    width: calc((100vw / 7 * 2 - 99px) * 0.65);
    display: flex;
    align-items: center;
}

.tl {
    font-size: 0.8vw;
    margin: 0;
    color: #90D7FC;
    text-align: left;
}

.cen {
    text-align: left;
    color: #fff;
    font-family: AlibabaMedium;
    font-size: 1vw;
    margin: 0;
}

.words {
    display: flex;
    justify-content: left;
    flex-direction: column;
    margin-left: 1.6vw;
}
</style>

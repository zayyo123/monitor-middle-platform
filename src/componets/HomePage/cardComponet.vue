<!--
 * @Author: Ryker
 * @Date: 2022-08-07 10:50:51
 * @LastEditors: 18062706139 2279549769@qq.com
 * @LastEditTime: 2022-08-25 21:32:02
-->
<template>
<div class="lastAll">
            <div class="line"></div>
    <div class="all">
        <div class="mainContainerCard">
            <img src="@/assets/homePage/point.png" alt="">
                <div class="left">
                    <div class="top">
                        <div class="left1">{{status}}</div>
                        <div :class="[method, 'right1']" >{{method}}</div>
                        <!-- 1.v-if -->
                    </div>
                    <div class="bottom"><a :href="link">{{link}}</a></div>
                </div>
                <div class="right">最近: {{time}}</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'cardCompoent',
    props: ['status', 'method', 'link', 'time','color']
}
</script>

<style scoped>
.all {
    padding: 1rem 0 1rem 2rem;
    background-color: black;
    display: flex;
    align-items: center;
    position: relative;
}
.mainContainerCard {
    width: calc((100vw / 7 * 2 - 99px) * 5 / 6);
    height: calc((100vw / 7 * 2 - 99px) / 5);
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    color: #fff;
    background-color: #275079;
}
.left {
    display: flex;
    flex-direction: column;
}
.top {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
}
.left1{
    font-family: AlibabaMedium;
    font-size: 1rem;
}
.right1{
    font-family: AlibabaMedium;
    margin-left: 1rem;
    font-size: 1rem;
}
.right {
    font-family: AlibabaMedium;
}
.bottom {
    font-family: AlibabRegular;
}
a {
    text-decoration: none;
    color: #fff;
}
.GET {
    color: #1990FF;
}
.POST {
    color: #4FCEA4 ;
}
.PUT {
    color: #F58159;
}
.DELETE {
    color: #F58159;
}
.WebSocket {
    color: #F58159;
}
img {
    position: absolute;
    left: -1.2rem;
    top: 15em
}
.line {
    width: 0;
    height: 100%;
    border: 1px solid #fff;
    overflow: hidden;
    opacity: 0.29;
}
.lastAll {
    display: flex;
}
</style>

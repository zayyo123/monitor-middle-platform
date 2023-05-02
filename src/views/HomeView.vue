<template>
<div class="home">
    <homeHeader />
    <homeDivider />
    <div class="mainContainer">
        <div class="mainLeft">
            <div class="section">
                <router-link to="/js-error"><firstGraph class="firstGraph" /></router-link>
                <router-link to="/performance"><secondGraph /></router-link>
                <router-link to="/performance"><thirdGraph  class="thirdGraph" /></router-link>
            </div>
        </div>
        <div class="mainCenter">
          <sixGraph style="height: calc(( 100% - 80px ) * 3 / 16 )"/>
          <sevenGraph style="height: calc(( 100% - 80px ) * 13 / 16 )"/>
        </div>
        <div class="mainRight">
          <router-link to="/req-error"><eightGraph/></router-link>
          <router-link to="/req-error"><nineGraph/></router-link>
        </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import homeHeader from "@/componets/HomePage/homeHeader.vue";
import homeDivider from '@/componets/HomePage/HomeDivider.vue';
import firstGraph from "@/componets/HomePage/firstGraph.vue";
import secondGraph from "@/componets/HomePage/secondGraph.vue";
import thirdGraph from "@/componets/HomePage/thirdGraph.vue";
import sixGraph from '@/componets/HomePage/sixGraph'
import sevenGraph from '@/componets/HomePage/sevenGraph'
import eightGraph from '@/componets/HomePage/eightGraph'
import nineGraph from "@/componets/HomePage/nineGraph.vue";
export default {
    name: 'homeView',
    components: {
        homeHeader,
        homeDivider,
        firstGraph,
        secondGraph,
        thirdGraph,
        sixGraph,
        sevenGraph,
        eightGraph,
        nineGraph
    }
}
</script>

<style lang="less" scoped>
.home {
    font-size: 0.2vw;
    font-family: Alibaba;
}

.mainContainer {
    display: flex;
    flex-direction: row;
    height: calc(100vh - 81px);
    background-color: black;
    overflow: auto;
}

.mainLeft {
    width: calc(100vw / 7 * 2);
}

.mainCenter {
    width: calc(100vw / 7 * 3);
}

.mainRight {
    width: calc(100vw / 7 * 2);
}

.section {
    margin-left: 45px;
    margin-top: 36px;
}

.firstGraph {
    margin-right: 54px;
}

.thirdGraph {
  margin-top: 30px;
}
a {
    text-decoration: none;
}
</style>

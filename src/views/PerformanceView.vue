<template>
  <div class="main">
    <leftMenu></leftMenu>
    <performanceMain></performanceMain>
  </div>
</template>

<script>
import performanceMain from "@/componets/Performance/performanceMain.vue";
import leftMenu from "@/componets/leftMenu.vue";

export default {
  name: "PerformanceView",
  components: {
    performanceMain,
    leftMenu,
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  font-size: 0.2vw;
  font-family: Alibaba;
}
</style>

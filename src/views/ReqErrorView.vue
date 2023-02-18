<template>
  <div class="main">
    <left-menu />
    <main-content />
  </div>
</template>

<script>
import mainContent from "@/componets/reqError/mainContent.vue";
import leftMenu from "@/componets/leftMenu.vue";

export default {
  name: "ReqErrorView",
  components: {
    mainContent,
    leftMenu,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
html {
  height: 100vh;
  margin: 0;
  padding: 0;
}

body {
  height: 100vh;
  margin: 0;
  padding: 0;
}
.main {
  display: flex;
  font-size: 0.2vw;
  font-family: Alibaba;
  color: white;
}
</style>


<template>
  <div class="JsErrorView">
    <el-container>
      <!-- 侧边栏 -->
      <left-menu />

      <!-- 主内容展示区 -->
      <el-main>
        <main-content />
      </el-main>
    </el-container>
  </div>
</template>

<script>

import MainContent from '@/componets/jsError/mainContent.vue'
import leftMenu from '@/componets/leftMenu.vue'


export default {
  name: 'JsErrorView',
  components: { MainContent, leftMenu },
  data () {
    return {}

  },
  mounted () {

  },
  methods: {
  },
};
</script>

<style  scoped>
.JsErrorView {
  display: flex;
}

.el-main {
  padding: 0;
  flex: 0.842;
  background-color: #000000;
  height: 100vh;
}
</style>
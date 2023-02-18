<template>
  <div class="main">
    <div class="logo">
      <img src="../assets/logo/logo.png" alt="Revue" class="img" />
    </div>
    <el-menu
      default-active="2"
      background-color="#25253f"
      text-color="#fff"
      active-text-color="#466AEB"
      :router="true"
      style="width: 100%"
    >
      <el-menu-item index="/">
        <div class="item">
          <div class="wrapper">
            <img src="../assets/路径 14.png" alt="" class="item-img" />
          </div>
          <span slot="title">首页</span>
        </div>
      </el-menu-item>
      <el-menu-item index="/js-error">
        <div class="item">
          <div class="wrapper">
            <img src="../assets/组 65.png" alt="" class="item-img" />
          </div>
          <span slot="title">js错误</span>
        </div>
      </el-menu-item>
      <el-menu-item index="/performance">
        <div class="item">
          <div class="wrapper">
            <img src="../assets/组 66.png" alt="" class="item-img" />
          </div>
          <span slot="title">页面性能</span>
        </div>
      </el-menu-item>
      <el-menu-item index="/req-error">
        <div class="item">
          <div class="wrapper">
            <img src="../assets/组 67.png" alt="" class="item-img" />
          </div>
          <span slot="title">接口错误</span>
        </div>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'leftMenu',
}
</script>

<style lang="scss" scoped>
.main {
  font-size: 0.2vw;
  font-family: Alibaba;
  flex: 0.158;
  height: 100vh;
  background: #25253f;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding-top: 1.7708vw;
  .logo {
    margin-bottom: 1.1vw;
  }
}
.img {
  width: 8.0208vw;
}
.item {
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .item-img {
    width: 0.8781vw;
    height: 1.9vh;
    margin-top: -0.4vh;
    margin-left: 2.5vw;
    margin-right: 2.4vw;
  }
}
:deep(.el-menu) {
  border-right: 0px;
}
</style>

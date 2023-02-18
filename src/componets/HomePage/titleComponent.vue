<!--
 * @Author: Ryker
 * @Date: 2022-08-07 00:16:31
 * @LastEditors: 最后编辑
 * @LastEditTime: 2022-08-07 10:14:32
-->
<template>
  <div class="mainTitle">
    <div class="triangle"></div>
    {{ na }}
  </div>
</template>

<script>
export default {
  name: 'titleComponent',
  props: ['na'],
}
</script>

<style scoped>
.triangle {
  border: 10px solid;
  border-color: transparent transparent transparent #2cbeff;
  height: 0;
  width: 0;
}
.mainTitle {
  display: flex;
  color: #fff;
  align-items: center;
  font-size: 1.4rem;
}
</style>

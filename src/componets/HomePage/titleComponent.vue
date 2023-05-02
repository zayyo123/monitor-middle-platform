
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

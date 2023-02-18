<template>
  <div class="jsRecord">
    <ul>
      <template>
        <li
          v-for="(item, index) in errorDetailed"
          :key="index"
          @click="changecurrent(index)"
        >
          <div class="icon"></div>
          <div class="content">
            <div class="Ctop">
              <p class="jstype">{{ item.errorType }}</p>
              <p class="time">{{ item.timeStamp }}</p>
            </div>
            <p class="jsmessage">{{ item.message }}</p>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    errorDetailed: {
      type: Array,
    }
  },
  name: 'jsRecord',
  data () {
    return {
    }
  },
  methods: {
    changecurrent (index) {
      this.$emit('changecurrent', index)

    }
  }
}
</script>

<style  scoped>
.jsRecord {
  width: 44.1vw;
  overflow-y: scroll;
  display: flex;
}
.jsRecord::-webkit-scrollbar {
  width: 20px;
  height: 8px;
}

.jsRecord::-webkit-scrollbar-thumb {
  border-radius: 12px;
  border: 7px solid rgba(0, 0, 0, 0);
  box-shadow: 9px 0 0 #a5adb7 inset;
  height: 120px;
}
li {
  width: 35vw;
  height: 10vh;

  list-style: none;
  display: flex;
  border: 1px solid #000;
  cursor: pointer;
}
ul {
  padding: 0;
  margin: 0;
}
.content {
  width: 31vw;
  height: 9vh;
  margin-top: 3px;
  border: 1px solid #275079;
  background: linear-gradient(10deg, #081f37 0%, #123251 100%);
  opacity: 0.7;
}
.content:hover {
  background-color: #f1f7fc;
  opacity: 1;
}
.icon {
  width: 56px;
  height: 11vh;
  background-image: url(../../assets/jsError/yuanquan.jpg);
  background-size: auto;
}
p {
  padding: 0;
  color: #fff;
  margin: 0;
  text-align: left;
}
.Ctop {
  width: 31vw;
  height: 4vh;

  display: flex;
}
.jstype {
  font-size: clamp(-1rem, 1.1vw, 4rem);
  margin: 1.5vh 0 0 2vw;
}
.jsmessage {
  font-size: clamp(-2rem, 0.9vw, 4rem);
  margin: 1vh 0 0 2vw;
}
.time {
  font-size: clamp(-1rem, 1vw, 4rem);
  margin: 1vh 0 0 13vw;
}
</style>

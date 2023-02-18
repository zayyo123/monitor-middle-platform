<template>
  <div class="mainComtent">
    <!-- 上半部分 -->
    <div class="topComtent">
      <!-- 上半左 -->
      <div class="topComtent-left">
        <data-show />
      </div>
      <!-- 上半右 -->
      <top-right />
      <!-- 下半部分 -->
    </div>
    <div class="title">
      <div class="js-detailed js-title">错误记录列表</div>
      <div class="js-record js-title">错误详情</div>
    </div>
    <div class="footerComtent">
      <!-- left -->
      <js-record
        :errorDetailed="errorDetailed"
        @changecurrent="changecurrent"
      />
      <!-- right -->
      <js-detailed
        :errorDetailed="errorDetailed"
        :current="current"
        @solve="solve"
        @neglect="neglect"
      />
    </div>
  </div>
</template>

<script>
import DataShow from './dataShow.vue'
import TopRight from './topRight1.vue'
import JsDetailed from './jsDetailed.vue'
import JsRecord from './jsRecord.vue'

import { getJsError } from '@/services/jsError/request'

export default {
  components: { DataShow, JsDetailed, JsRecord, TopRight },
  name: 'mainComtent',
  data () {
    return {
      errorDetailed: [],
      current: 0
    }
  },
  created () {
    getJsError().then(res => {
      this.errorDetailed = res.data.result
    })

  },
  methods: {
    changecurrent (index) {
      this.current = index
    },
    solve () {
      this.errorDetailed.splice(this.current, 1)
    },
    neglect () {
      if (this.current < this.errorDetailed.length - 1) {
        this.current = this.current + 1
      }
      else {
        this.current = 0
      }

    }
  }

}
</script>

<style  scoped>
.topComtent {
  padding-left: 60px;
  display: flex;
  height: 53vh;
  width: 74vw;
}
.footerComtent {
  padding-left: 60px;
  height: 40vh;
  width: 74vw;
  display: flex;
}
.title {
  width: 73vw;
  height: 5.5vh;
  margin-left: 60px;

  display: flex;
}
.js-title {
  font-size: clamp(1rem, 1.3vw, 4rem);
  font-family: Alibaba;
  font-weight: 400;
  color: #ffffff;
  height: 3.5vh;
}
.js-detailed {
  width: 9vw;
}
.js-record {
  width: 6vw;
  margin-left: 29vw;
}
</style>
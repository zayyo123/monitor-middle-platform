<template>
  <div class="header">
    <div class="left">
      <img src="@/assets/homePage/logoNow.png" alt="" class="logo">
      <div class="Revue center">Revue</div>
      <div class="Revue center">前端监测网站</div>
      <!-- <div class="line"></div> -->
    </div>
    <div class="right">
      <div class="time">{{ realTime }}</div>
      <div class="smallTime">
        <div class="shadow">{{ day }}</div>
        <div>{{ clearDay }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeHeader',
  data () {
    return {
      realTime: '14:54:45',
      day: 'WED',
      clearDay: '2020.07.30',
      months: { 'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04', 'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08', 'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12' }
    }
  },
  mounted () {
    let time = new Date()
    let timeStr = time + ''
    let day = timeStr.slice(0, 3)
    this.day = day
    var reg = /[0-9]{2}:[0-9]{2}:[0-9]{2}/
    let val = timeStr.match(reg)
    this.realTime = val[0]
    const yearReg = /[0-9]{4}/
    const year = timeStr.match(yearReg)
    const dayReg = /[0-9]+/
    const Day = timeStr.match(dayReg)
    const monthReg = /\w{3}/g
    let engMonth = timeStr.match(monthReg)
    const month = this.months[engMonth[1]]
    this.clearDay = year + '.' + month + '.' + Day
    setInterval(() => {
      let time1 = new Date()
      let reg1 = /[0-9]{2}:[0-9]{2}:[0-9]{2}/
      let val1 = (time1 + '').match(reg1)
      this.realTime = val1[0]
    }, 1000)
  },
  methods: {
  }
}
</script>

<style scoped>
.header {
  height: 80px;
  border-bottom: 1px solid #e9e9e9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #000000;
  color: #fff;
  font-family: Alibaba;
}

.left {
  display: flex;
}

.logo {
  margin-right: 2px;
}

.Revue {
  font-size: 30px;
  margin-right: 20px;
}

.center {
  line-height: 45px;
}

.right {
  display: flex;
  margin-right: 140px;
}

.time {
  line-height: 95px;
  font-size: 30px;
}

.smallTime {
  justify-content: left;
  margin-left: 20px;
  margin-top: 30px;
  font-size: 7px;
}

.shadow {
  text-align: left;
  color: grey;
}

img {
  height: 1.3rem;
  width: 1.5rem;
  margin-top: 0.8rem;
}
</style>

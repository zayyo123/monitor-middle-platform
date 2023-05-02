
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import service from './utils/request'
import tools from './utils/tools'
import * as echarts from 'echarts'
// import 'echarts-gl'
import ElementUI from 'element-ui'
import './assets/element/styles.scss'
import '@/assets/fonts/font.css'

import 'rrweb-player/dist/style.css';
import { localGet } from '@/utils/login'
router.beforeEach((to, from, next) => {
  if(to.path == '/loginView' || to.path === '/') {
    if(localGet('token')) {
      const query = to.query
      if(to.path === 'loginView' || to.path === '/') {
        router.push({
          path: '/homeView'
        })
      } else {
        router.push({
          path: '/' + query
        })
      }
      return 
    }
    next()
  } else {
    if(!localGet('token')) {
      next({path: '/loginView'})
    } else {
      next()
    }
  }
})
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

Vue.prototype.$req = service
Vue.prototype.$tool = tools

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

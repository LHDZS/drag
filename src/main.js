// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import axios from 'axios'
import Router from 'vue-router'
import VueDraggableResizable from 'vue-draggable-resizable'

// 可选择导入默认样式
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

Vue.component('vue-draggable-resizable', VueDraggableResizable)

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.prototype.$http = axios

Vue.prototype.$echarts = echarts

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

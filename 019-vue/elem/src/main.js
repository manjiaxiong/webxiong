import Vue from 'vue'
import App from './App.vue'
import './eleui'
Vue.config.productionTip = false
import lottie from 'vue-lottie';
Vue.component('lottie', lottie)
import infiniteScroll from "vue-infinite-scroll";
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
import bus from './components/bus/bus.js'
Vue.prototype.$bus = bus
import axios from "axios"
Vue.prototype.$axios=axios
import './assets/js/mock'
new Vue({
  render: h => h(App),
}).$mount('#app')

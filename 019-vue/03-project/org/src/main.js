import Vue from 'vue'
import App from './App.vue'

new Vue({//挂载在id为app的节点上
  render: h => h(App),
}).$mount('#app')
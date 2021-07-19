<template>
  <div id="app">
    <!-- <lottie :options="defaultOptions" :height="1080" :width="1920" v-on:animCreated="handleAnimation" /> -->
    <!-- <table-1></table-1> -->
  </div>
</template>

<script>
// import Table1 from './components/Table.vue'
// import Myload from './components/Myload.vue'
import * as animationData from "./data.json";
export default {
  name: 'App',
  data(){
    return {
      defaultOptions: { animationData: animationData.default },
        animationSpeed: 1,
        anim: {}
    }
  },
  created(){
    this.query_common_credit()
  },
  methods:{
     handleAnimation: function(anim) {
        this.anim = anim;
        console.log(anim); //这里可以看到 lottie 对象的全部属性
    },
    query_common_credit(){
      var loginMode = 'msdk';//游戏内默认msdk(wx|qq|msdk)
      var url = '/api/msdk/proxy/query_common_credit';
      this.$axios.get(url)
        .then(response => {
          console.log(response,'response')
        })
        .catch(error => {
          console.log(error,'error')
        })
    }
  },
  components: {
    // Table1
    // Aside
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <debounceButton circle type="success" ref="btn1" :auto-loading="false" @click="($event,done)=>submit($event,done,aa)" :time='400'>按钮</debounceButton>
  </div>
</template>

<script>
import debounceButton from './components/debounceButton.vue'
// import Myload from './components/Myload.vue'
export default {
  name: 'App',
  components:{
    debounceButton
  },
  data(){
    return {
      aa:999
    }
  },
  methods: {
    submit($event,done,aa) {
      done(()=>{})
    }
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

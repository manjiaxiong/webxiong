<template>
<div id="three">
three
  <div v-for="item in tableData" :key='item.dtae'  @click="changeComp(item)">
{{item.name}}
</div>
</div>

  
</template>

<script>
import bus from './bus/bus.js'

  export default {
    name:'three',
    props:{
      tableData:Array
    },
    methods: {
      
    },

    data() {
      return {
        
    }}
  }
</script>
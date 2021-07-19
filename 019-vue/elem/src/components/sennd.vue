<template>
<div id="sennd">

  <span @click="DeliteData"> sennd</span> 
  <div v-for="item in tableData" :key='item.dtae'  @click="changeComp(item)">
{{item.name}}
</div>
</div>

  
</template>

<script>
import bus from './bus/bus.js'

  export default {
    name:'sennd',
    props:{
      tableData:Array
    },
    mounted(){
      // console.log(this.tableData.splice(1),this.tableData);
      this.$bus.$emit('change-message',this.tableData.splice(1))
    },
    methods: {
      DeliteData(){
        this.$bus.$emit('change-message',this.tableData.splice(1))
      }
    },

    data() {
      return {
        
    }}
  }
</script>
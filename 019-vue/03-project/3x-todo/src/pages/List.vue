<template>
  <div id="List">
    	<ul>
         <Item v-for="(todo,index) in todos" :todo="todo" :index=index :delTodo="delTodo"/>   
        </ul>
  </div>
</template>

<script>
import Item from './Item.vue'

export default {
  name: 'List',
   data(){
            return {
               
            }
        },
        props:{
           todos:Array,
           delTodo:Function
        },
        components:{
            Item
        }
       
        
}
</script>

<style scoped>

</style>
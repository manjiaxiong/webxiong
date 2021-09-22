<template>
    <div class="List">
        <Item 
            v-for="(todo,index) in this.$store.state.todos"
            :todo="todo"
            :index="index"
        />
    </div>
</template>

<script>
    import Item from './Item.vue'
    export default {
        name:'List',
        components:{
            Item
        },
        props:{
            todos:Array,
        }
    }
</script>

<style>
  
</style>
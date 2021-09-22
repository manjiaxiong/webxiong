<template>
    <div id="app">
        <Header :addTodo="addTodo" />
        <List :todos="todos" :delTodo="delTodo"/>
        <Footer :todos="todos" :selectAllTodo="selectAllTodo" :delAllDone="delAllDone"/>
    </div>
</template>
<script>
import Header from './pages/Header.vue';
import List from './pages/List.vue';
import Footer from './pages/Footer.vue';

export default {
    name: 'App',
    data: function() {
        return {
            todos: [
                {
                    task: '吃饭',
                    done: true
                },
                {
                    task: '睡觉',
                    done: false
                }
            ]
        }
    },
    components: {
        Header,
        List,
        Footer
    },
    methods:{
        addTodo: function(todo) {
        this.todos.unshift(todo)
      },
      delTodo:function(index){
           this.todos.splice(index,1)
      },
      selectAllTodo(value){
           this.todos.forEach((item)=>{
              item.done = value
          })
      },
      delAllDone(){
          this.todos = this.todos.filter(item=>!item.done)
      }
    },
    watch:{
      todos:function(){
        console.log(1111)
      }
    }
}
</script>
<style>

  #app{
        width: 600px;
        margin: 100px auto;
    }
</style>
<template>
  <div id="Header">
    	<h1>Todo List</h1>
        <input type="text" placeholder="请派发任务" v-model='task' @keyup.enter="handelAdd()">
  </div>
</template>

<script>


export default {
  name: 'Header',
   data(){
            return {
                task:''
            }
        },
        props:{
            addTodo:Function
        },
        methods:{
            handelAdd(){
                //1.校验数据
                const task = this.task.trim()
                if(!task){
                    alert('请输入任务')
                    return
                }
                //2.封装任务对象
                const todo = {
                    task,
                    done:false
                }
                //3.将任务对象插入到任务数组
                this.addTodo(todo)
                //4.清空输入框
                this.task = ''
            }
        }
}
</script>

<style scoped>
	h1{
		text-align: center;
	}
	input{
		width: 100%;
	}

</style>
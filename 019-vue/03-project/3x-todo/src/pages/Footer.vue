<template>
    <div class="Footer">
        <input type="checkbox" v-model="allDone">
        <span>{{totalDone}}/{{total}}</span>
        <button @click="delAll">删除选中</button>
    </div>
</template>

<script>
    //导出组件
    export default {
        name:'Footer',
        props:{
             todos:Array,
             selectAllTodo:Function,
             delAllDone:Function
         },
         methods:{
            delAll(){
                if(window.confirm('您确定要删除所有选中的任务吗?')){
                    //console.log(this.index)
                     this.delAllDone()
                }
            }
         },
          computed:{
            total(){
                return this.todos.length
            },
            totalDone(){
                return this.todos.reduce((total,item)=>{
                    if(item.done){
                        total = total + 1
                    }
                    return total
                },0)
            },
            allDone:{
                get(){
                    return (this.total == this.totalDone) && (this.total != 0)
                },
                set(value){
                    this.selectAllTodo(value)
                }
            }
        }
    }
</script>

<style scoped>
    .Footer{
        width: 100%;
        line-height: 40px;
        margin-top: 10px;
    }
    input{
        float: left;
        margin-top: 14px;
        vertical-align: top;
    }
    button{
        float: right;
        margin-top: 14px;
        vertical-align: top;
    }  
</style>
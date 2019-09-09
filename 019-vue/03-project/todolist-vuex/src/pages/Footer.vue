<template>
    <div class="Footer">
        <input type="checkbox" v-model="allDone">
        <span>{{totalDone}}/{{total}}</span>
        <button @click="delAll">删除选中</button>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { SELECT_ALL_TODO ,DEL_ALL_TODO} from '../store/types.js'
    //导出组件
    export default {
        name:'Footer',
         methods:{
            delAll(){
                if(window.confirm('您确定要删除所有选中的任务吗?')){
                    //console.log(this.index)
                     this.$store.dispatch(DEL_ALL_TODO)
                }
            }
         },
          computed:{
            //
            ...mapGetters([
              'total',
              'totalDone',
            ]),
            allDone:{
                get(){
                    return this.$store.getters.allDone
                },
                set(value){
                    this.$store.dispatch(SELECT_ALL_TODO,value)
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
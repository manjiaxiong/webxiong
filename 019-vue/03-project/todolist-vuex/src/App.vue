<!--模版-->
<template>
    <div id="app">
        <!--3.使用组件-->
        <Header />
        <List   />
        <Footer  />
    </div>
</template>

<!--逻辑-->
<script>
    //1.引入组件
    import Header from './pages/Header.vue'
    import List from './pages/List.vue'
    import Footer from './pages/Footer.vue'
import func from '../../../../ve-template等2个文件/ve-framework/ve-framework/components/DragTreeTable/func'
    export default {
        name:'App',
        //2.注册组件
        components:{
            Header,
            List,
            Footer,
        },
        data(){
            return {

            }
        },
        created(){
            function sey() {
                console.log(111);
            }
            this.$store.commit('SETFUN', sey)
            console.log(this.$store.state)
        }
    }
</script>

<!--样式-->
<style>
    #app{
        width: 600px;
        margin: 100px auto;
    }
</style>